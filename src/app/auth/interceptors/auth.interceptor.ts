import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, finalize, switchMap, take, tap } from 'rxjs/operators';

import { Token } from '../models/token';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly AUTH_HEADER = 'Authorization';
  private readonly LOGIN_EXCEPTION_CODE = 'user-not-logged-in';

  private token!: Token;

  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.addAuthenticationToken(request);

    return next.handle(request).pipe(
      switchMap((event) => {
        if (
          event.type === HttpEventType.Response &&
          event.status === 200 &&
          event.body &&
          Array.isArray(event.body.errors)
        ) {
          const errors = event.body.errors as any[];
          const needsToLogin = Boolean(
            errors.find(
              (error: any) => error.message === this.LOGIN_EXCEPTION_CODE
            )
          );

          if (needsToLogin) {
            if (!this.token) {
              this.redirectToLogin();
              return next.handle(request);
            }

            if (this.isRefreshingToken) {
              return this.refreshTokenSubject.pipe(
                filter((result) => result !== null),
                take(1),
                switchMap((result) => {
                  if (result) {
                    return next.handle(this.addAuthenticationToken(request));
                  }

                  this.redirectToLogin();
                  return next.handle(request);
                })
              );
            } else {
              this.isRefreshingToken = true;
              this.refreshTokenSubject.next(null);

              return this.refreshToken().pipe(
                switchMap((success: boolean) => {
                  this.refreshTokenSubject.next(success);

                  return next.handle(this.addAuthenticationToken(request));
                }),
                finalize(() => {
                  this.isRefreshingToken = false;
                })
              );
            }
          }
        }

        return next.handle(request);
      })
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    this.token = this.tokenStorageService.getToken();

    if (!this.token) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(
        this.AUTH_HEADER,
        `${this.token.type} ${this.token.access_token}`
      ),
    });
  }

  private refreshToken(): Observable<boolean> {
    return of(false);
  }

  private redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}

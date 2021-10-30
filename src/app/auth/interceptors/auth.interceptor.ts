import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';

import { Token } from '../models/token';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { Router } from '@angular/router';
import { RefreshTokenGQL } from '@graphql/generated/models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly AUTH_HEADER = 'Authorization';
  private readonly LOGIN_EXCEPTION_CODE = 'user-not-logged-in';
  private readonly SIGNATURE_EXCEPTION_MESSAGE = 'Signature has expired';
  private readonly REFRESH_TOKEN_EXPIRED = 'Refresh token is expired';
  private readonly REFRESH_TOKEN_INVALID = 'Invalid refresh token';
  private readonly TOKEN_TYPE = 'JWT';
  private readonly X_CUSTOM_HEADER = 'X-Custom-Header';
  private readonly X_CUSTOM_HEADER_VALUE = 'custom-value';

  private token!: Token;

  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  logoutExcetionMessages = [
    this.LOGIN_EXCEPTION_CODE,
    this.REFRESH_TOKEN_INVALID,
    this.REFRESH_TOKEN_EXPIRED,
  ];

  constructor(
    private refreshTokenGQL: RefreshTokenGQL,
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
            errors.find((error: any) =>
              this.logoutExcetionMessages.includes(error.message)
            )
          );

          if (needsToLogin || !this.token) {
            this.redirectToLogin();
            return of(event);
          }

          const tokenNeedsRefreshing = Boolean(
            errors.find(
              (error) => error.message === this.SIGNATURE_EXCEPTION_MESSAGE
            )
          );

          if (tokenNeedsRefreshing) {
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

        return of(event);
      })
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    this.token = this.tokenStorageService.getToken();

    if (!this.token) {
      return request;
    }

    if (request.headers.has(this.X_CUSTOM_HEADER)) {
      return request.clone({
        headers: request.headers.delete(
          this.X_CUSTOM_HEADER,
          this.X_CUSTOM_HEADER_VALUE
        ),
      });
    }

    return request.clone({
      headers: request.headers.set(
        this.AUTH_HEADER,
        `${this.TOKEN_TYPE} ${this.token.token}`
      ),
    });
  }

  private refreshToken(): Observable<any> {
    return this.refreshTokenGQL
      .mutate(
        { refreshToken: this.token.refreshToken },
        {
          context: {
            headers: new HttpHeaders().set(
              this.X_CUSTOM_HEADER,
              this.X_CUSTOM_HEADER_VALUE
            ),
          },
        }
      )
      .pipe(
        map(({ data }) => data?.refreshToken),
        tap((token: any) => {
          if (!!token) {
            this.tokenStorageService.saveToken(token);
          } else {
            this.redirectToLogin();
          }
        }),
        map((token) => !!token)
      );
  }

  private redirectToLogin() {
    this.tokenStorageService.removeToken();
    this.router.navigate(['/auth/login']);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject, throwError } from 'rxjs';
import { catchError, delay, take, takeUntil, tap } from 'rxjs/operators';

import { ClrLoadingState } from '@clr/angular';

import { TokenStorageService } from '@schmsoft/auth/services/token-storage/token-storage.service';
import { LoginGQL } from '@schmsoft/graphql/generated/models';
import { GraphQLClients } from '@graphql/graphql.module';

@Component({
  selector: 'ssw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  invalidCredentials = false;
  loginButtonState: ClrLoadingState = ClrLoadingState.DEFAULT;

  private destroyed$ = new Subject<any>();

  constructor(
    private formBuilder: FormBuilder,
    private loginGQL: LoginGQL,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {
    this.loginGQL.client = GraphQLClients.PUBLIC;
  }

  ngOnInit() {
    this.initLoginForm();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  login() {
    if (this.loginForm.invalid) return;
    this.loginButtonState = ClrLoadingState.LOADING;

    this.loginGQL
      .mutate({ ...this.loginForm.value })
      .pipe(
        take(1),
        tap(({ data }) => {
          this.tokenStorageService.saveToken(data?.tokenAuth as any);
          this.loginButtonState = ClrLoadingState.SUCCESS;

          this.router.navigate(['/']);
        }),
        catchError((error) => {
          this.invalidCredentials = true;
          this.loginButtonState = ClrLoadingState.ERROR;
          return throwError(error);
        })
      )
      .subscribe();
  }

  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.invalidCredentials = false;
      });
  }
}

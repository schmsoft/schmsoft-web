import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Token } from '@schmsoft/auth/models/token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'token';

  constructor(private router: Router) {}

  saveToken(token: Token) {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getToken(): Token {
    let token: any = localStorage.getItem(this.TOKEN_KEY);
    try {
      token = JSON.parse(token) || null;
    } catch (error) {
      token = null;
    }

    return token;
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  closeSession() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}

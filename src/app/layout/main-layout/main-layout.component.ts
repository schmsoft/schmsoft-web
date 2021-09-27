import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '@schmsoft/auth/services/token-storage/token-storage.service';

@Component({
  selector: 'ssw-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  collapsed = false;
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  logout() {
    this.tokenStorage.removeToken();
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn() {
    return Boolean(this.tokenStorage.getToken());
  }
}

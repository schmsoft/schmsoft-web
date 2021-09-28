import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MeGQL, UserType } from '@graphql/generated/models';
import { TokenStorageService } from '@schmsoft/auth/services/token-storage/token-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ssw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  $me!: Observable<Partial<UserType> | undefined | null>;

  constructor(
    private meGQL: MeGQL,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.$me = this.meGQL.fetch().pipe(
      map(({ data }) => data.me),
      map((user) => ({
        ...user,
        firstName: user?.firstName || 'Schmsoft',
        lastName: user?.lastName || 'User',
      }))
    );
  }

  logout() {
    this.tokenStorage.removeToken();
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn() {
    return Boolean(this.tokenStorage.getToken());
  }
}

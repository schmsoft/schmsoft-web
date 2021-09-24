import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PrimeNGConfig } from 'primeng/api';

import { UsersGQL } from '@graphql/generated/models';

@Component({
  selector: 'ssw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'schmsoft-web';
  users$!: Observable<any>;

  constructor(
    private usersGql: UsersGQL,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.users$ = this.usersGql.fetch().pipe(map(({ data }) => data.users));
  }
}

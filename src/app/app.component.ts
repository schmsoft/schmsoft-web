import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsersGQL, UserType } from './graphql/generated/graphql';

@Component({
  selector: 'ssw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'schmsoft-web';
  users$!: Observable<any>;

  constructor(private usersGql: UsersGQL) {}

  ngOnInit() {
    this.users$ = this.usersGql.fetch().pipe(map(({ data }) => data.users));
  }
}

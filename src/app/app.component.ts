import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MeGQL, UserType } from '@graphql/generated/models';

@Component({
  selector: 'ssw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'schmsoft-web';
  me$!: Observable<Partial<UserType> | undefined | null>;

  constructor(private meGql: MeGQL) {}

  ngOnInit() {
    this.me$ = this.meGql.fetch().pipe(map(({ data }) => data.me));

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.setAttribute('cds-theme', 'dark');
    }
  }
}

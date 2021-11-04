import { Component, OnInit } from '@angular/core';

import { LoanPortfolioType, LoanPortoliosGQL } from '@graphql/generated/models';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.scss'],
})
export class ListPortfolioComponent implements OnInit {
  loanPortfolios$!: Observable<any[]>;

  constructor(private loanPortfoliosGQL: LoanPortoliosGQL) {}

  ngOnInit(): void {
    this.loanPortfolios$ = this.loanPortfoliosGQL.fetch().pipe(
      map(({ data }) => data.loanPortfolios || []),
      tap((data) => console.log(data))
    );
  }
}

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
  showPortfolioModal = false;

  loanPortfolios$!: Observable<any[]>;
  loanPortfolio: any;

  constructor(private loanPortfoliosGQL: LoanPortoliosGQL) {}

  ngOnInit(): void {
    this.loanPortfolios$ = this.loanPortfoliosGQL.fetch().pipe(
      map(({ data }) => data.loanPortfolios || []),
      tap((data) => console.log(data))
    );
  }

  editPortfolio(loanPortfolio: any) {
    this.loanPortfolio = loanPortfolio;
    this.showPortfolioModal = true;
  }

  createPortfolio() {
    this.loanPortfolio = null;
    this.showPortfolioModal = true;
  }
}

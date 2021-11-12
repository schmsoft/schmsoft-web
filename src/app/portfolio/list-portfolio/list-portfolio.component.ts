import { Component, OnDestroy, OnInit } from '@angular/core';

import { LoanPortfolioType, LoanPortoliosGQL } from '@graphql/generated/models';

import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ssw-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.scss'],
})
export class ListPortfolioComponent implements OnInit, OnDestroy {
  showPortfolioModal = false;

  loanPortfolios!: LoanPortfolioType[];
  loanPortfolio: any;
  destroyed$ = new Subject<boolean>();

  constructor(private loanPortfoliosGQL: LoanPortoliosGQL) {}

  ngOnInit(): void {
    this.fetchLoanPortfolios();
  }

  private fetchLoanPortfolios() {
    this.loanPortfoliosGQL
      .fetch()
      .pipe(
        takeUntil(this.destroyed$),
        map(({ data }) => {
          this.loanPortfolios = data.loanPortfolios || ([] as any);
          return this.loanPortfolios;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  portfolioCreated(portfolio: LoanPortfolioType) {
    this.loanPortfolios = [portfolio, ...this.loanPortfolios];
  }
  portfolioUpdated(portfolio: LoanPortfolioType) {
    this.loanPortfolios = this.loanPortfolios.map((lp) =>
      lp.id === portfolio.id ? { ...lp, ...portfolio } : lp
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

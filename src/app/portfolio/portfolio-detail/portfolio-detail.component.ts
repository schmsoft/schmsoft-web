import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LoanPortfolioType,
  LoanPortolioGQL,
  StaffUsersGQL,
  UpdatePortfolioManagersGQL,
} from '@graphql/generated/models';
import { Observable, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
})
export class PortfolioDetailComponent implements OnDestroy, OnInit {
  destroyed$ = new Subject<LoanPortfolioType>();
  loanPortfolio: any;
  staffUsers$: Observable<any> | undefined;
  id: any;
  managers: any[] = [];

  constructor(
    private loanPortfolioGQL: LoanPortolioGQL,
    private staffUsersGQL: StaffUsersGQL,
    private updatePortfolioManagersGQL: UpdatePortfolioManagersGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchPortfolio();
    this.fetchStaffUsers();
  }

  private fetchPortfolio() {
    this.id = this.route.snapshot.params.id;
    this.loanPortfolioGQL
      .fetch({ id: this.id })
      .pipe(
        takeUntil(this.destroyed$),
        map(({ data }) => {
          this.loanPortfolio = data?.loanPortfolio as any;
          this.managers = [...this.loanPortfolio?.owners];
          return this.loanPortfolio;
        })
      )
      .subscribe();
  }

  private fetchStaffUsers() {
    this.staffUsers$ = this.staffUsersGQL
      .fetch()
      .pipe(map(({ data }) => data?.staffUsers));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  updateManagers() {
    this.updatePortfolioManagersGQL
      .mutate({
        portfolioId: this.loanPortfolio.id,
        userIds: this.managers.map((m) => m.id),
      })
      .pipe(take(1))
      .subscribe();
  }
}

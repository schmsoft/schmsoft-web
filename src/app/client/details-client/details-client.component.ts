import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessGQL } from '@graphql/generated/models';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss'],
})
export class DetailsClientComponent implements OnInit, OnDestroy {
  businessId: string = '';

  destroyed$ = new Subject<boolean>();

  /* OWNERSDATA, BUSINESSDATA and SALESDATA are used as inputs in:
   * Owners-details module
   * Business-details module
   * Sales-details module
   */
  ownersData: any[] | undefined;
  businessData: any | undefined;
  salesData: any | undefined;

  constructor(
    private businessGQL: BusinessGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.businessId = this.route.snapshot.params.id;
    this.businessGQL
      .fetch({ id: this.businessId })
      .pipe(
        takeUntil(this.destroyed$),
        map(({ data }) => data.business),
        tap((data) => {
          this.ownersData = data?.ownerSet;
          this.businessData = {
            created: data?.created,
            modified: data?.modified,
            name: data?.name,
            description: data?.description,
            businessType: data?.businessType,
            category: data?.category,
            registrationNumber: data?.registrationNumber,
            status: data?.status,
            yearsInCurrentLocation: data?.yearsInCurrentLocation,
          };
          this.salesData = {
            operatingCapitalCurrency: data?.operatingCapitalCurrency,
            operatingCapital: data?.operatingCapital,
            dailySalesCurrency: data?.dailySalesCurrency,
            dailySales: data?.dailySales,
          };
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BusinessContactRecordsGQL,
  BusinessGQL,
} from '@graphql/generated/models';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss'],
})
export class DetailsClientComponent implements OnInit, OnDestroy {
  businessId: string = '';

  destroyed$ = new Subject<boolean>();

  /* OWNERSDATA, BUSINESSDATA, SALESDATA, CONTACTRECORDS are used as inputs in:
   * Owners-details module
   * Business-details module
   * Sales-details module
   * Communication-timeline module
   */
  ownersData: any[] | undefined;
  businessData: any | undefined;
  salesData: any | undefined;
  contactRecords: any | undefined;

  constructor(
    private businessGQL: BusinessGQL,
    private businessContactRecordsGQL: BusinessContactRecordsGQL,
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

    // CONTACT RECORDS USED IN COMMUNICATION TIMELINE TAB
    this.getContactRecords();
  }

  getContactRecords() {
    this.businessContactRecordsGQL
      .fetch({ businessID: this.businessId })
      .pipe(
        takeUntil(this.destroyed$),
        map(({ data }) => data?.businessContactRecords),
        tap((data) => {
          this.contactRecords = data;
        })
      )
      .subscribe();
  }

  onRecordChange() {
    this.getContactRecords();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

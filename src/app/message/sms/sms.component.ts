import { Component, OnDestroy, OnInit } from '@angular/core';
import { BusinessOwnersGQL } from '@graphql/generated/models';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit, OnDestroy {
  selectedUsers: any[] | undefined;
  users: any;
  message: string = '';

  destroyed$ = new Subject<boolean>();

  constructor(private businessOwnersGQL: BusinessOwnersGQL) {}

  ngOnInit(): void {
    this.businessOwnersGQL
      .fetch()
      .pipe(
        takeUntil(this.destroyed$),
        map(({ data }) =>
          data.businessOwners?.map((n) => ({
            label: n?.user?.name,
            value: n?.phoneNumber,
          }))
        ),
        tap((data) => {
          this.users = data;
          console.log(this.users);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

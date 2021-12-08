import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BusinessOwnersGQL,
  SendSmsToNumbersGQL,
} from '@graphql/generated/models';
import { Observable, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

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

  constructor(
    private businessOwnersGQL: BusinessOwnersGQL,
    private sendSmsToNumbersGQL: SendSmsToNumbersGQL
  ) {}

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

  sendSms() {
    const phoneNumbers = this.selectedUsers?.map((user) => user?.value);
    console.log(phoneNumbers, this.message);
    this.sendSmsToNumbersGQL
      .mutate({
        phoneNumbers,
        text: this.message,
      })
      .pipe(
        take(1),
        tap((resp) => console.log(resp))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

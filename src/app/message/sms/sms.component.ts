import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BusinessOwnersGQL,
  SendSmsToNumbersGQL,
} from '@graphql/generated/models';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
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
    private sendSmsToNumbersGQL: SendSmsToNumbersGQL,
    private toastr: ToastrService
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
        tap((resp) => {
          this.selectedUsers = undefined;
          this.message = '';
          this.toastr.success('Message Sent Successfully', 'Hurray!!');
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

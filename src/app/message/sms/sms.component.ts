import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BusinessOwnersGQL,
  SendSmsToNumbersGQL,
} from '@graphql/generated/models';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'ssw-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit, OnDestroy {
  selectedUsers: any[] | undefined;
  users: any = [];
  message: string = '';
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  destroyed$ = new Subject<boolean>();

  phoneNumberUtil = PhoneNumberUtil.getInstance();

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
    this.validateBtnState = ClrLoadingState.LOADING;
    const phoneNumbers = this.selectedUsers?.map((user) => user?.value);
    this.sendSmsToNumbersGQL
      .mutate({
        phoneNumbers,
        text: this.message,
      })
      .pipe(
        take(1),
        tap((resp) => {
          this.selectedUsers = undefined;
          this.message = ' ';
          this.validateBtnState = ClrLoadingState.SUCCESS;
          this.toastr.success('Message Sent Successfully', 'Hurray!!');
        })
      )
      .subscribe();
  }

  inputChange(value: any) {
    try {
      const phoneNumber = this.phoneNumberUtil.parse(value, 'KE');
      const nationalNumber = phoneNumber.getNationalNumberOrDefault();
      const validNumber = this.phoneNumberUtil.isValidNumber(phoneNumber);
      if (
        validNumber &&
        !this.users.some((user: any) => user?.value.includes(nationalNumber))
      ) {
        this.users = [...this.users, { label: value, value }];
      }
    } catch (e) {}
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}

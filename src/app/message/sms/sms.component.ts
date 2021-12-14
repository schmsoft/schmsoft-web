import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'ssw-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent {
  @Input()
  users: any = [];

  @Input()
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  @Output()
  handleSendSms = new EventEmitter<{}>();

  @Input()
  selectedUsers: any[] | undefined;

  @Input()
  message: string = '';

  phoneNumberUtil = PhoneNumberUtil.getInstance();

  constructor() {}

  sendSms() {
    this.validateBtnState = ClrLoadingState.LOADING;
    this.handleSendSms.emit({ users: this.selectedUsers, text: this.message });
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
}

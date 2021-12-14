import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { SendSmsToUsersGQL } from '@graphql/generated/models';
import { ToastrService } from 'ngx-toastr';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.scss'],
})
export class SmsModalComponent implements OnInit {
  @Input()
  openModal: boolean = false;

  @Input()
  ownersData: any | undefined;

  @Output()
  handleCloseModal = new EventEmitter<boolean>();

  users: any = [];
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  selectedOwners: any[] | undefined;
  message: string = '';

  constructor(
    private sendsmsToUsersGQl: SendSmsToUsersGQL,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.users = this.ownersData.map((n: any) => ({
      id: n?.user?.id,
      label: n?.user?.name,
      value: n?.user?.owner?.phoneNumber,
    }));
  }

  closeModal() {
    this.handleCloseModal.emit(false);
  }

  sendSms(data: any) {
    this.validateBtnState = ClrLoadingState.LOADING;
    const userIds = data.users?.map((user: any) => user?.id);
    this.sendsmsToUsersGQl
      .mutate({
        text: data.text,
        userIds,
      })
      .pipe(
        take(1),
        tap((resp) => {
          this.closeModal();
          this.validateBtnState = ClrLoadingState.SUCCESS;
          this.toastr.success(
            'Message has been sent successfully!',
            'Hurray!!'
          );
        })
      )
      .subscribe();
  }
}

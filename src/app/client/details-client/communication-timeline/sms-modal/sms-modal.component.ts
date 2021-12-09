import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  selectedOwners: any[] | undefined;
  message: string = '';

  constructor(
    private sendsmsToUsersGQl: SendSmsToUsersGQL,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.handleCloseModal.emit(false);
  }

  sendSms() {
    const userIds = this.selectedOwners?.map(({ user }) => user?.id);
    console.log(userIds, this.message);
    this.sendsmsToUsersGQl
      .mutate({
        text: this.message,
        userIds,
      })
      .pipe(
        take(1),
        tap((resp) => {
          this.closeModal();
          this.toastr.success(
            'Message has been sent successfully!',
            'Hurray!!'
          );
        })
      )
      .subscribe();
  }
}

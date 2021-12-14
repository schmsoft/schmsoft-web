import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import {
  BusinessOwnersGQL,
  SendSmsToNumbersGQL,
} from '@graphql/generated/models';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  users: any = [];
  selectedUsers: any[] | undefined;
  message: string = '';
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

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

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  sendMessage(data: any) {
    this.sendSmsToNumbersGQL
      .mutate(data)
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
}

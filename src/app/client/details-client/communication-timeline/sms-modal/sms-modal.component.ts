import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ssw-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.scss'],
})
export class SmsModalComponent implements OnInit {
  @Input()
  openModal: boolean = false;

  @Output()
  handleCloseModal = new EventEmitter<boolean>();

  selectedOwners: any[] | undefined;
  owners: any | undefined;
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.handleCloseModal.emit(false);
  }

  sendSms() {}
}

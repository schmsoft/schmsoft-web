import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsModalComponent } from './sms-modal.component';
import {
  ClrComboboxModule,
  ClrDatagridModule,
  ClrIconModule,
  ClrModalModule,
  ClrTextareaModule,
} from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { SmsModule } from '@schmsoft/message/sms/sms.module';

@NgModule({
  declarations: [SmsModalComponent],
  imports: [
    CommonModule,
    ClrModalModule,
    ClrComboboxModule,
    ClrIconModule,
    ClrDatagridModule,
    ClrTextareaModule,
    FormsModule,
    SmsModule,
  ],
  exports: [SmsModalComponent],
})
export class SmsModalModule {}

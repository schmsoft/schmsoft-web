import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsComponent } from './sms.component';
import {
  ClrButtonModule,
  ClrComboboxModule,
  ClrDatagridModule,
  ClrIconModule,
  ClrLoadingButtonModule,
  ClrLoadingModule,
  ClrTextareaModule,
} from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    ClrComboboxModule,
    ClrIconModule,
    ClrDatagridModule,
    ClrTextareaModule,
    ClrLoadingModule,
    ClrLoadingButtonModule,
    FormsModule,
  ],
  exports: [SmsComponent],
})
export class SmsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsComponent } from './sms.component';

@NgModule({
  declarations: [SmsComponent],
  imports: [CommonModule],
  exports: [SmsComponent],
})
export class SmsModule {}

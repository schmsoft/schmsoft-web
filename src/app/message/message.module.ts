import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsModule } from './sms/sms.module';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MessageRoutingModule, SmsModule],
})
export class MessageModule {}

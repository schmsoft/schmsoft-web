import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsModalModule } from './sms-modal/sms-modal.module';
import { CommunicationTimelineComponent } from './communication-timeline.component';

@NgModule({
  declarations: [CommunicationTimelineComponent],
  imports: [CommonModule, SmsModalModule],
  exports: [CommunicationTimelineComponent],
})
export class CommunicationTimelineModule {}

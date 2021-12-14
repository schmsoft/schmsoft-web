import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsModalModule } from './sms-modal/sms-modal.module';
import { CommunicationTimelineComponent } from './communication-timeline.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  declarations: [CommunicationTimelineComponent],
  imports: [CommonModule, SmsModalModule, TimelineModule],
  exports: [CommunicationTimelineComponent],
})
export class CommunicationTimelineModule {}

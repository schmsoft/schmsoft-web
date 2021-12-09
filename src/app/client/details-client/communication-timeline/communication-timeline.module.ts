import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationTimelineComponent } from './communication-timeline.component';

@NgModule({
  declarations: [CommunicationTimelineComponent],
  imports: [CommonModule],
  exports: [CommunicationTimelineComponent],
})
export class CommunicationTimelineModule {}

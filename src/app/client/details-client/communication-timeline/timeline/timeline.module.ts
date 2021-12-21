import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { ClrFormsModule, ClrTimelineModule } from '@clr/angular';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, ClrTimelineModule, ClrFormsModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}

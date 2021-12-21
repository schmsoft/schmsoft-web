import { Component, Input } from '@angular/core';

@Component({
  selector: 'ssw-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input()
  contactRecords: any[] = [];
  constructor() {}
}

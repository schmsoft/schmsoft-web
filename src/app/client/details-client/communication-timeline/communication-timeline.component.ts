import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-communication-timeline',
  templateUrl: './communication-timeline.component.html',
  styleUrls: ['./communication-timeline.component.scss'],
})
export class CommunicationTimelineComponent {
  @Input()
  ownersData: any[] | undefined;

  @Input()
  contactRecords: any[] = [];

  openModal: boolean = false;

  constructor() {}
}

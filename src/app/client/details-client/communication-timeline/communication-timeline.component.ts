import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-communication-timeline',
  templateUrl: './communication-timeline.component.html',
  styleUrls: ['./communication-timeline.component.scss'],
})
export class CommunicationTimelineComponent implements OnInit {
  @Input()
  ownersData: any[] | undefined;

  openModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

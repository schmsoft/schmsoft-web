import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  handleRecordChange = new EventEmitter<any>();

  constructor() {}

  closeModal(event: boolean) {
    this.openModal = event;
    this.handleRecordChange.emit();
  }
}

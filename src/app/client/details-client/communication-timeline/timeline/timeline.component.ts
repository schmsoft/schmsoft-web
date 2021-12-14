import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input()
  contactRecords: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}

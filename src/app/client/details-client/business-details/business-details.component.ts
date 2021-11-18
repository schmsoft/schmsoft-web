import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {
  @Input()
  businessData: any;

  constructor() {}

  ngOnInit(): void {}
}

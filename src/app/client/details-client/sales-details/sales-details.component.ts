import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss'],
})
export class SalesDetailsComponent implements OnInit {
  @Input()
  salesData: any;

  constructor() {}

  ngOnInit(): void {}
}

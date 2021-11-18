import { Component, Input } from '@angular/core';

@Component({
  selector: 'ssw-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss'],
})
export class SalesDetailsComponent {
  @Input()
  salesData: any;

  constructor() {}
}

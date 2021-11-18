import { Component, Input } from '@angular/core';

@Component({
  selector: 'ssw-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent {
  @Input()
  businessData: any;

  constructor() {}
}

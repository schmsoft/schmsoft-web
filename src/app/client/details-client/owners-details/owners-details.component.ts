import { Component, Input } from '@angular/core';

@Component({
  selector: 'ssw-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.scss'],
})
export class OwnersDetailsComponent {
  @Input()
  ownersData: any;

  constructor() {}
}

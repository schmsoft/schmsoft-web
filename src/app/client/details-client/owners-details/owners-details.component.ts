import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.scss'],
})
export class OwnersDetailsComponent implements OnInit {
  @Input()
  ownersData: any;

  constructor() {}

  ngOnInit(): void {}
}

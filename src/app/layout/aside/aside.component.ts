import { Component, Input } from '@angular/core';

@Component({
  selector: 'ssw-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() collapsed = false;

  constructor() {}
}

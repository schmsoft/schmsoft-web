import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssw-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  constructor() {}

  sortNumbers(a: number[]) {
    return a.sort((a, b) => a - b);
  }
}

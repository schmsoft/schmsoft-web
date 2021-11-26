import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ssw-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit {
  selectedUsers: any[] | undefined;
  users$: Observable<any> | undefined;
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  updateSelectedUsers() {}
}

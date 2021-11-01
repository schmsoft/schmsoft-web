import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ssw-client-contact-details-form',
  templateUrl: './client-contact-details-form.component.html',
  styleUrls: ['./client-contact-details-form.component.scss'],
})
export class ClientContactDetailsFormComponent {
  @Input() formGroup!: FormGroup;

  constructor() {}
}

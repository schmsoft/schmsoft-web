import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OwnerGender, OwnerMaritalStatus } from '@graphql/generated/models';

import { Helpers, SelectOption } from '@schmsoft/utility/helpers';

@Component({
  selector: 'ssw-client-basic-details-form',
  templateUrl: './client-basic-details-form.component.html',
  styleUrls: ['./client-basic-details-form.component.scss'],
})
export class ClientBasicDetailsFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  genderOptions: SelectOption[] = [];
  maritalStatusOptions: SelectOption[] = [];

  constructor() {}

  ngOnInit() {
    this.genderOptions = Helpers.optionsFromEnum(OwnerGender);
    this.maritalStatusOptions = Helpers.optionsFromEnum(OwnerMaritalStatus);
  }
}

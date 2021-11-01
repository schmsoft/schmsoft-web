import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OwnerIdentificationMethod } from '@graphql/generated/models';
import { Helpers, SelectOption } from '@schmsoft/utility/helpers';

@Component({
  selector: 'ssw-client-identification-details-form',
  templateUrl: './client-identification-details-form.component.html',
  styleUrls: ['./client-identification-details-form.component.scss'],
})
export class ClientIdentificationDetailsFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  identificationMethods: SelectOption[] = [];

  constructor() {}

  ngOnInit() {
    this.identificationMethods = Helpers.optionsFromEnum(
      OwnerIdentificationMethod
    );
  }

  frontFileSelected(event: any) {
    if (event.target.files.length) {
      const file = event.target.files[0];

      this.formGroup.patchValue({ file, frontScan: file.name });
    } else {
      this.formGroup.patchValue({ file: null, frontScan: '' });
    }
  }
  backFileSelected(event: any) {
    if (event.target.files.length) {
      const file = event.target.files[0];

      this.formGroup.patchValue({ file, backScan: file.name });
    } else {
      this.formGroup.patchValue({ file: null, backScan: '' });
    }
  }
}

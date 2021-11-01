import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  BusinessBusinessType,
  BusinessCategory,
} from '@graphql/generated/models';
import { Helpers, SelectOption } from '@schmsoft/utility/helpers';

@Component({
  selector: 'ssw-business-basic-details-form',
  templateUrl: './business-basic-details-form.component.html',
  styleUrls: ['./business-basic-details-form.component.scss'],
})
export class BusinessBasicDetailsFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  businessCategoryOptions: SelectOption[] = [];
  businessTypeOptions: SelectOption[] = [];

  constructor() {}

  ngOnInit() {
    this.businessCategoryOptions = Helpers.optionsFromEnum(BusinessCategory);
    this.businessTypeOptions = Helpers.optionsFromEnum(BusinessBusinessType);
  }
}

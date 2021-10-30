import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  OwnerGender,
  OwnerIdentificationMethod,
  OwnerMaritalStatus,
  OwnerTotalMonthlyIncomeCurrency,
} from '@graphql/generated/models';

@Component({
  selector: 'ssw-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent implements OnInit {
  clientFormGroup!: FormGroup;

  genderKeys = [];
  genderOptions = OwnerGender;

  maritalStatusKeys = [];
  maritalStatusOptions = OwnerMaritalStatus;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.genderKeys = Object.keys(this.genderOptions) as any;
    this.maritalStatusKeys = Object.keys(this.maritalStatusOptions) as any;

    this.initClientFormGroup();
  }

  submit() {}

  private initClientFormGroup() {
    this.clientFormGroup = this.fb.group({
      owner: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        identificationMethod: [
          OwnerIdentificationMethod.NationalId,
          Validators.required,
        ],
        identificationNumber: ['', Validators.required],
        totalMonthlyIncome: [0, Validators.required],
        totalMonthlyIncomeCurrency: [
          OwnerTotalMonthlyIncomeCurrency.Kes,
          Validators.required,
        ],
        numberOfDependants: [0, Validators.required],
        gender: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        passportPhoto: [''],
      }),
      business: this.fb.group({
        name: ['', Validators.required],
      }),
    });
  }
}

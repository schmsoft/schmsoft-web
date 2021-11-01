import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  BusinessInput,
  MutationAddBusinessArgs,
  OwnerGender,
  OwnerMaritalStatus,
  RegisterClientGQL,
} from '@graphql/generated/models';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ssw-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent implements OnInit {
  @Input() showClientForm!: boolean;
  @Output() showClientFormChanged = new EventEmitter<boolean>();

  basicDetailsForm!: FormGroup;
  identificationDetailsForm!: FormGroup;
  contactDetailsForm!: FormGroup;
  businessBasicDetailsForm!: FormGroup;

  genderKeys = [];
  genderOptions = OwnerGender;

  maritalStatusKeys = [];
  maritalStatusOptions = OwnerMaritalStatus;
  disableNext = false;

  constructor(
    private fb: FormBuilder,
    private registerClientGQL: RegisterClientGQL
  ) {}

  ngOnInit(): void {
    this.initClientFormGroup();
  }

  submit() {
    this.disableNext = true;

    const business = this.businessBasicDetailsForm.value;

    console.log({ business });

    this.registerClientGQL
      .mutate({
        business,
        owner: {
          gender: this.basicDetailsForm.value.gender,
          phoneNumber: this.contactDetailsForm.value.phoneNumber,
          identificationMethod:
            this.identificationDetailsForm.value.identificationMethod,
          identificationNumber:
            this.identificationDetailsForm.value.identificationNumber,
        },
      })
      .pipe(take(1))
      .subscribe();
  }

  close() {
    this.showClientForm = false;
    this.showClientFormChanged.emit(this.showClientForm);
  }

  reset() {}

  private initClientFormGroup() {
    this.basicDetailsForm = this.fb.group({
      firstNames: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    });

    this.identificationDetailsForm = this.fb.group({
      identificationMethod: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      frontScan: ['', Validators.required],
      backScan: ['', Validators.required],
    });

    this.contactDetailsForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      alternativePhoneNumber: [
        '',
        [Validators.minLength(10), Validators.maxLength(10)],
      ],
      email: ['', Validators.email],
    });

    this.businessBasicDetailsForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      businessType: ['', Validators.required],
      category: [''],
      yearsInCurrentLocation: [1],
    });
  }
}

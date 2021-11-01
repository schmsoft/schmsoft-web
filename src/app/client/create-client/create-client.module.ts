import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ClrFormsModule,
  ClrInputModule,
  ClrSelectModule,
  ClrStepperModule,
  ClrWizardModule,
} from '@clr/angular';

import { BusinessBasicDetailsFormModule } from '@schmsoft/business/business-basic-details-form/business-basic-details-form.module';

import { CreateClientComponent } from './create-client.component';
import { ClientBasicDetailsFormModule } from '../client-basic-details-form/client-basic-details-form.module';
import { ClientIdentificationDetailsFormModule } from '../client-identification-details-form/client-identification-details-form.module';
import { ClientContactDetailsFormModule } from '../client-contact-details-form/client-contact-details-form.module';

@NgModule({
  declarations: [CreateClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrStepperModule,
    ClrFormsModule,
    ClrInputModule,
    ClrSelectModule,
    ClrWizardModule,
    ClientBasicDetailsFormModule,
    ClientIdentificationDetailsFormModule,
    ClientContactDetailsFormModule,
    BusinessBasicDetailsFormModule,
  ],
  exports: [CreateClientComponent],
})
export class CreateClientModule {}

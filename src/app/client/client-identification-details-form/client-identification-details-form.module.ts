import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ClrFormsModule,
  ClrIconModule,
  ClrInputModule,
  ClrSelectModule,
} from '@clr/angular';

import { ClientIdentificationDetailsFormComponent } from './client-identification-details-form.component';

@NgModule({
  declarations: [ClientIdentificationDetailsFormComponent],
  imports: [
    CommonModule,
    ClrFormsModule,
    ReactiveFormsModule,
    ClrInputModule,
    ClrSelectModule,
    ClrIconModule,
  ],
  exports: [ClientIdentificationDetailsFormComponent],
})
export class ClientIdentificationDetailsFormModule {}

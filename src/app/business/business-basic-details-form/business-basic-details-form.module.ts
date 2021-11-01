import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ClarityModule,
  ClrFormsModule,
  ClrInputModule,
  ClrSelectModule,
} from '@clr/angular';

import { BusinessBasicDetailsFormComponent } from './business-basic-details-form.component';

@NgModule({
  declarations: [BusinessBasicDetailsFormComponent],
  imports: [
    CommonModule,
    ClrFormsModule,
    ReactiveFormsModule,
    ClrInputModule,
    ClrSelectModule,
  ],
  exports: [BusinessBasicDetailsFormComponent],
})
export class BusinessBasicDetailsFormModule {}

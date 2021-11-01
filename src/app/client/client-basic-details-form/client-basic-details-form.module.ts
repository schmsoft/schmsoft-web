import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClrFormsModule, ClrInputModule, ClrSelectModule } from '@clr/angular';

import { ClientBasicDetailsFormComponent } from './client-basic-details-form.component';

@NgModule({
  declarations: [ClientBasicDetailsFormComponent],
  imports: [
    CommonModule,
    ClrFormsModule,
    ClrInputModule,
    ReactiveFormsModule,
    ClrSelectModule,
  ],
  exports: [ClientBasicDetailsFormComponent],
})
export class ClientBasicDetailsFormModule {}

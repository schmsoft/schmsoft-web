import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClrFormsModule, ClrInputModule } from '@clr/angular';

import { ClientContactDetailsFormComponent } from './client-contact-details-form.component';

@NgModule({
  declarations: [ClientContactDetailsFormComponent],
  imports: [CommonModule, ClrFormsModule, ReactiveFormsModule, ClrInputModule],
  exports: [ClientContactDetailsFormComponent],
})
export class ClientContactDetailsFormModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ClrFormsModule,
  ClrInputModule,
  ClrSelectModule,
  ClrStepperModule,
} from '@clr/angular';

import { CreateClientComponent } from './create-client.component';

@NgModule({
  declarations: [CreateClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrStepperModule,
    ClrFormsModule,
    ClrInputModule,
    ClrSelectModule,
  ],
  exports: [CreateClientComponent],
})
export class CreateClientModule {}

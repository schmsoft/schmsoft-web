import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFormComponent } from './portfolio-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ClrFormsModule,
  ClrInputModule,
  ClrTextareaModule,
} from '@clr/angular';

@NgModule({
  declarations: [PortfolioFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrFormsModule,
    ClrInputModule,
    ClrTextareaModule,
  ],
  exports: [PortfolioFormComponent],
})
export class PortfolioFormModule {}

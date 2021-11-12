import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PortfolioDetailComponent } from './portfolio-detail.component';
import {
  ClarityModule,
  ClrComboboxModule,
  ClrDatagridModule,
  ClrIconModule,
  ClrSelectModule,
} from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PortfolioDetailComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDatagridModule,
    ClrComboboxModule,
    ClrSelectModule,
    ClarityModule,
    FormsModule,
    RouterModule,
  ],
  exports: [PortfolioDetailComponent],
})
export class PortfolioDetailModule {}

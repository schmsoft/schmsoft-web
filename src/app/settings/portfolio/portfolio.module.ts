import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, ClrDatagridModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}

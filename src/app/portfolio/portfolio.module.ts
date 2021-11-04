import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, ClrDatagridModule, PortfolioRoutingModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}

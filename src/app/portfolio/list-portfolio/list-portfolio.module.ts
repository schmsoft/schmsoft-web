import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';
import { UpdatePortfolioModule } from '../update-portfolio/update-portfolio.module';
import { ListPortfolioComponent } from './list-portfolio.component';

@NgModule({
  declarations: [ListPortfolioComponent],
  imports: [CommonModule, ClrDatagridModule, UpdatePortfolioModule],
  exports: [ListPortfolioComponent],
})
export class ListPortfolioModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClrDatagridModule } from '@clr/angular';
import { UpdatePortfolioModule } from '../update-portfolio/update-portfolio.module';
import { ListPortfolioComponent } from './list-portfolio.component';

@NgModule({
  declarations: [ListPortfolioComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClrDatagridModule,
    UpdatePortfolioModule,
  ],
  exports: [ListPortfolioComponent],
})
export class ListPortfolioModule {}

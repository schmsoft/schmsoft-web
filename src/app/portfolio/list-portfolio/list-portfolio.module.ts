import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';
import { CreatePortfolioModule } from '../create-portfolio/create-portfolio.module';
import { EditPortfolioModule } from '../edit-portfolio/edit-portfolio.module';
import { ListPortfolioComponent } from './list-portfolio.component';

@NgModule({
  declarations: [ListPortfolioComponent],
  imports: [
    CommonModule,
    ClrDatagridModule,
    CreatePortfolioModule,
    EditPortfolioModule,
  ],
  exports: [ListPortfolioComponent],
})
export class ListPortfolioModule {}

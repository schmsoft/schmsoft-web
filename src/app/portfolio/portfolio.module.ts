import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ListPortfolioModule } from './list-portfolio/list-portfolio.module';
import { PortfolioDetailModule } from './portfolio-detail/portfolio-detail.module';

@NgModule({
  declarations: [],
  imports: [ListPortfolioModule, PortfolioDetailModule, PortfolioRoutingModule],
})
export class PortfolioModule {}

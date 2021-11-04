import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ListPortfolioModule } from './list-portfolio/list-portfolio.module';

@NgModule({
  declarations: [],
  imports: [ListPortfolioModule, PortfolioRoutingModule],
})
export class PortfolioModule {}

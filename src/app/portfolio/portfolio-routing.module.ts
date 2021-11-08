import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPortfolioComponent } from './list-portfolio/list-portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: ListPortfolioComponent,
  },
  {
    path: 'portfolio/:id',
    component: PortfolioDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}

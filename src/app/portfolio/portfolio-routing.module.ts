import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPortfolioComponent } from './list-portfolio/list-portfolio.component';

const routes: Routes = [
  {
    path: 'portfolio',
    component: ListPortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePortfolioComponent } from './update-portfolio.component';
import { ClrModalModule } from '@clr/angular';
import { PortfolioFormModule } from '../portfolio-form/portfolio-form.module';

@NgModule({
  declarations: [UpdatePortfolioComponent],
  imports: [CommonModule, ClrModalModule, PortfolioFormModule],
  exports: [UpdatePortfolioComponent],
})
export class UpdatePortfolioModule {}

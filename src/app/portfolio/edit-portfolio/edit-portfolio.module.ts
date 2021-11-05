import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPortfolioComponent } from './edit-portfolio.component';
import { ClrModalModule } from '@clr/angular';
import { PortfolioFormModule } from '../portfolio-form/portfolio-form.module';

@NgModule({
  declarations: [EditPortfolioComponent],
  imports: [CommonModule, ClrModalModule, PortfolioFormModule],
  exports: [EditPortfolioComponent],
})
export class EditPortfolioModule {}

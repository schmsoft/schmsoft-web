import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { PortfolioModule } from '../portfolio/portfolio.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SettingsRoutingModule, PortfolioModule],
})
export class SettingsModule {}

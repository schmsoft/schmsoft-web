import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, AnalyticsRoutingModule],
})
export class AnalyticsModule {}

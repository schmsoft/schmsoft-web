import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ReportingModule } from '@schmsoft/reporting/reporting.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, ReportingModule],
})
export class CoreModule {}

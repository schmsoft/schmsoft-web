import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details.component';
import { BasicInfoModule } from './basic-info/basic-info.module';
import { SalesInfoModule } from './sales-info/sales-info.module';

@NgModule({
  declarations: [BusinessDetailsComponent],
  imports: [CommonModule, BasicInfoModule, SalesInfoModule],
  exports: [BusinessDetailsComponent],
})
export class BusinessDetailsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDetailsComponent } from './sales-details.component';

@NgModule({
  declarations: [SalesDetailsComponent],
  imports: [CommonModule],
  exports: [SalesDetailsComponent],
})
export class SalesDetailsModule {}

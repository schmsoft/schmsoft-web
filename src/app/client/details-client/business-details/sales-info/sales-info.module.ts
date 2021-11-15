import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesInfoComponent } from './sales-info.component';

@NgModule({
  declarations: [SalesInfoComponent],
  imports: [CommonModule],
  exports: [SalesInfoComponent],
})
export class SalesInfoModule {}

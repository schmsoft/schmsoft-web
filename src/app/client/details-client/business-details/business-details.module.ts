import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details.component';

@NgModule({
  declarations: [BusinessDetailsComponent],
  imports: [CommonModule],
  exports: [BusinessDetailsComponent],
})
export class BusinessDetailsModule {}

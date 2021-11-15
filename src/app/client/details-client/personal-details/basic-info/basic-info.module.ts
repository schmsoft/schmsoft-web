import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info.component';

@NgModule({
  declarations: [BasicInfoComponent],
  imports: [CommonModule],
  exports: [BasicInfoComponent],
})
export class BasicInfoModule {}

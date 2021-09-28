import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, ClrIconModule, ClrVerticalNavModule],
  exports: [AsideComponent],
})
export class AsideModule {}

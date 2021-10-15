import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, ClrIconModule, ClrVerticalNavModule, RouterModule],
  exports: [AsideComponent],
})
export class AsideModule {}

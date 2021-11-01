import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import {
  ClrIconModule,
  ClrLayoutModule,
  ClrVerticalNavModule,
} from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClrLayoutModule,
    RouterModule,
  ],
  exports: [AsideComponent],
})
export class AsideModule {}

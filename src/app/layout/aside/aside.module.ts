import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import {
  ClrIconModule,
  ClrLayoutModule,
  ClrVerticalNavModule,
} from '@clr/angular';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@schmsoft/app-routing.module';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClrLayoutModule,
    AppRoutingModule,
  ],
  exports: [AsideComponent],
})
export class AsideModule {}

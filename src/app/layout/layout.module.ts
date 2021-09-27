import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClrDropdownModule,
  ClrIconModule,
  ClrVerticalNavModule,
} from '@clr/angular';

import { LayoutRoutingModule } from './layout-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClrDropdownModule,
  ],
})
export class LayoutModule {}

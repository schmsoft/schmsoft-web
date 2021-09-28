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
import { HeaderModule } from './header/header.module';
import { AsideModule } from './aside/aside.module';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ClrIconModule,
    ClrVerticalNavModule,
    ClrDropdownModule,
    HeaderModule,
    AsideModule,
  ],
})
export class LayoutModule {}

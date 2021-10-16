import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ClrDropdownModule,
  ClrHeader,
  ClrIconModule,
  ClrLayoutModule,
} from '@clr/angular';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ClrDropdownModule,
    ClrIconModule,
    ClrLayoutModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

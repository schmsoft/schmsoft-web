import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDropdownModule, ClrIconModule } from '@clr/angular';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ClrDropdownModule, ClrIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

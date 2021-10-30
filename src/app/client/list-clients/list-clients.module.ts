import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';

import { ListClientsComponent } from './list-clients.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListClientsComponent],
  imports: [CommonModule, ClrDatagridModule, RouterModule],
  exports: [ListClientsComponent],
})
export class ListClientsModule {}

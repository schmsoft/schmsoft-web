import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClrDatagridModule } from '@clr/angular';

import { ListClientsComponent } from './list-clients.component';
import { CreateClientModule } from '../create-client/create-client.module';

@NgModule({
  declarations: [ListClientsComponent],
  imports: [CommonModule, ClrDatagridModule, RouterModule, CreateClientModule],
  exports: [ListClientsComponent],
})
export class ListClientsModule {}

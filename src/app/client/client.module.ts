import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientsModule } from './list-clients/list-clients.module';
import { CreateClientModule } from './create-client/create-client.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ListClientsModule,
    CreateClientModule,
  ],
})
export class ClientModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientsModule } from './list-clients/list-clients.module';
import { CreateClientModule } from './create-client/create-client.module';
import { DetailsClientModule } from './details-client/details-client.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ListClientsModule,
    CreateClientModule,
    DetailsClientModule,
  ],
})
export class ClientModule {}

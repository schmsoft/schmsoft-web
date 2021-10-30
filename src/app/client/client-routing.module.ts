import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreateClientComponent,
  },
  {
    path: '',
    component: ListClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

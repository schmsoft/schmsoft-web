import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from '@schmsoft/reporting/overview/overview.component';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () =>
      import('@schmsoft/client/client.module').then((m) => m.ClientModule),
  },

  {
    path: 'message',
    loadChildren: () =>
      import('@schmsoft/message/message.module').then((m) => m.MessageModule),
  },

  {
    path: 'settings',
    loadChildren: () =>
      import('@schmsoft/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },

  {
    path: '',
    component: OverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

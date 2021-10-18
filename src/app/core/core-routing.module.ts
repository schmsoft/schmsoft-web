import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from '@schmsoft/reporting/overview/overview.component';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('../settings/settings.module').then((m) => m.SettingsModule),
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

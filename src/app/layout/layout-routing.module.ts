import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@schmsoft/guards/auth/auth.guard';
import { GuestGuard } from '@schmsoft/guards/guest/guest.guard';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@schmsoft/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [GuestGuard],
  },
  {
    path: 'core',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@schmsoft/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

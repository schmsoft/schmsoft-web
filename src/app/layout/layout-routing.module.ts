import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@schmsoft/guards/auth/auth.guard';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {
  ClrButtonModule,
  ClrCheckboxModule,
  ClrInputModule,
  ClrLoadingModule,
  ClrPasswordModule,
  ClrSelectModule,
} from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ClrSelectModule,
    ClrPasswordModule,
    ClrInputModule,
    ClrCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ClrLoadingModule,
  ],
})
export class AuthModule {}

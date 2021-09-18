import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, SharedModule],
})
export class ClientModule {}

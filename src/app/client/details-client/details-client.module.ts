import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsClientComponent } from './details-client.component';
import { ClrIconModule, ClrTabsModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { PersonalDetailsModule } from './personal-details/personal-details.module';

@NgModule({
  declarations: [DetailsClientComponent],
  imports: [
    CommonModule,
    ClrTabsModule,
    ClrIconModule,
    PersonalDetailsModule,
    RouterModule,
  ],
  exports: [DetailsClientComponent],
})
export class DetailsClientModule {}

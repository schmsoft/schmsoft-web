import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsClientComponent } from './details-client.component';
import { ClrIconModule, ClrTabsModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { OwnersDetailsModule } from './owners-details/owners-details.module';
import { BusinessDetailsModule } from './business-details/business-details.module';
import { SalesDetailsModule } from './sales-details/sales-details.module';

@NgModule({
  declarations: [DetailsClientComponent],
  imports: [
    CommonModule,
    ClrTabsModule,
    ClrIconModule,
    OwnersDetailsModule,
    BusinessDetailsModule,
    SalesDetailsModule,
    RouterModule,
  ],
  exports: [DetailsClientComponent],
})
export class DetailsClientModule {}

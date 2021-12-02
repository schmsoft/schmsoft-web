import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersDetailsComponent } from './owners-details.component';

@NgModule({
  declarations: [OwnersDetailsComponent],
  imports: [CommonModule],
  exports: [OwnersDetailsComponent],
})
export class OwnersDetailsModule {}

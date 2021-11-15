import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details.component';
import { BasicInfoModule } from './basic-info/basic-info.module';
import { IdentificationInfoModule } from './identification-info/identification-info.module';
import { ContactInfoModule } from './contact-info/contact-info.module';

@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    BasicInfoModule,
    IdentificationInfoModule,
    ContactInfoModule,
  ],
  exports: [PersonalDetailsComponent],
})
export class PersonalDetailsModule {}

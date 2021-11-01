import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ClrFormsModule,
  ClrInputModule,
  ClrSelectModule,
  ClrTextareaModule,
} from '@clr/angular';

import { BusinessBasicDetailsFormComponent } from './business-basic-details-form.component';

describe('BusinessBasicDetailsFormComponent', () => {
  let component: BusinessBasicDetailsFormComponent;
  let fixture: ComponentFixture<BusinessBasicDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessBasicDetailsFormComponent],
      imports: [ClrInputModule, ClrSelectModule, ClrTextareaModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBasicDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ClrFormsModule, ClrInputModule, ClrSelectModule } from '@clr/angular';

import { ClientIdentificationDetailsFormComponent } from './client-identification-details-form.component';

@Component({
  template: ` <ssw-client-identification-details-form [formGroup]="formGroup">
  </ssw-client-identification-details-form>`,
})
class TestHostComponent {
  formGroup = new FormBuilder().group({
    identificationMethod: [''],
    identificationNumber: [''],
  });
}

describe('ClientIdentificationDetailsFormComponent', () => {
  let component: ClientIdentificationDetailsFormComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ClientIdentificationDetailsFormComponent,
        TestHostComponent,
      ],
      imports: [
        ReactiveFormsModule,
        ClrInputModule,
        ClrSelectModule,
        ClrFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });
});

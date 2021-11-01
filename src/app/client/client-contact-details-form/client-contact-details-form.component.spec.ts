import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';

import { ClientContactDetailsFormComponent } from './client-contact-details-form.component';

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

describe('ClientContactDetailsFormComponent', () => {
  let component: ClientContactDetailsFormComponent;
  let fixture: ComponentFixture<ClientContactDetailsFormComponent>;
  let testHost: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientContactDetailsFormComponent, TestHostComponent],
      imports: [ClrInputModule],
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

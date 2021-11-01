import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIdentificationDetailsFormComponent } from './client-identification-details-form.component';

describe('ClientIdentificationDetailsFormComponent', () => {
  let component: ClientIdentificationDetailsFormComponent;
  let fixture: ComponentFixture<ClientIdentificationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientIdentificationDetailsFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIdentificationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

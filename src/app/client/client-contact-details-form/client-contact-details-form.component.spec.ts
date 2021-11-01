import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientContactDetailsFormComponent } from './client-contact-details-form.component';

describe('ClientContactDetailsFormComponent', () => {
  let component: ClientContactDetailsFormComponent;
  let fixture: ComponentFixture<ClientContactDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientContactDetailsFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientContactDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

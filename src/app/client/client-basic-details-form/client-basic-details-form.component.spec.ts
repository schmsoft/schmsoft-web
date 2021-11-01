import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule, ClrSelectModule } from '@clr/angular';

import { ClientBasicDetailsFormComponent } from './client-basic-details-form.component';

describe('ClientBasicDetailsFormComponent', () => {
  let component: ClientBasicDetailsFormComponent;
  let fixture: ComponentFixture<ClientBasicDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientBasicDetailsFormComponent],
      imports: [ClrSelectModule, ClrInputModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBasicDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

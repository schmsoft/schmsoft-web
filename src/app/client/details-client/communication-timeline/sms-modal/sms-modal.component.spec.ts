import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { SmsModalComponent } from './sms-modal.component';

describe('SmsModalComponent', () => {
  let component: SmsModalComponent;
  let fixture: ComponentFixture<SmsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsModalComponent],
      imports: [ToastrModule.forRoot(), FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

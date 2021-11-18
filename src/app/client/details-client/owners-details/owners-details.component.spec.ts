import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersDetailsComponent } from './owners-details.component';

describe('PersonalDetailsComponent', () => {
  let component: OwnersDetailsComponent;
  let fixture: ComponentFixture<OwnersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnersDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

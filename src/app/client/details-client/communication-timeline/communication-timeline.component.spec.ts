import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTimelineComponent } from './communication-timeline.component';

describe('CommunicationTimelineComponent', () => {
  let component: CommunicationTimelineComponent;
  let fixture: ComponentFixture<CommunicationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunicationTimelineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

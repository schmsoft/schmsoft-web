import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ClrLayoutModule,
  ClrNavigationModule,
  ClrVerticalNavModule,
} from '@clr/angular';
import { AppRoutingModule } from '@schmsoft/app-routing.module';

import { AsideComponent } from './aside.component';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideComponent],
      imports: [
        BrowserAnimationsModule,
        ClrVerticalNavModule,
        ClrLayoutModule,
        ClrNavigationModule,
        AppRoutingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

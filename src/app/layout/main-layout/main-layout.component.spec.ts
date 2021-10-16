import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ClrDropdownModule,
  ClrLayoutModule,
  ClrMainContainerModule,
  ClrVerticalNavModule,
} from '@clr/angular';

import { AppRoutingModule } from '@schmsoft/app-routing.module';
import { AsideModule } from '../aside/aside.module';
import { HeaderModule } from '../header/header.module';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLayoutComponent],
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        ClrDropdownModule,
        ClrVerticalNavModule,
        AsideModule,
        HeaderModule,
        ClrMainContainerModule,
        ClrLayoutModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

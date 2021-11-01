import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClrDatagridModule } from '@clr/angular';
import { CreateClientModule } from '../create-client/create-client.module';

import { ListClientsComponent } from './list-clients.component';

describe('ClientsListComponent', () => {
  let component: ListClientsComponent;
  let fixture: ComponentFixture<ListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClientsComponent],
      imports: [ClrDatagridModule, CreateClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ClientsGQL } from '@graphql/generated/models';

@Component({
  selector: 'ssw-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
  clients$!: Observable<any[]>;

  constructor(private clientsGQL: ClientsGQL) {}

  ngOnInit(): void {
    this.clients$ = this.clientsGQL
      .fetch()
      .pipe(map(({ data }) => data.businessOwners || []));
  }
}

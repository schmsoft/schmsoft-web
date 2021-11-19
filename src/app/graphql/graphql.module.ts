import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InMemoryCache } from '@apollo/client/core';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '@env/environment';

import { AuthInterceptor } from '../auth/interceptors/auth.interceptor';

export enum GraphQLClients {
  PUBLIC = 'public',
  DEFAULT = 'default',
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [HttpClientModule],
})
export class GraphQLModule {
  constructor(public apollo: Apollo, httpLink: HttpLink) {
    apollo.createDefault({
      link: httpLink.create({
        uri: environment.defaultGraphUri,
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    });

    apollo.createNamed(GraphQLClients.PUBLIC, {
      link: httpLink.create({
        uri: environment.publicGraphUri,
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    });
  }
}

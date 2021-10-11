import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '@env/environment';

import { AuthInterceptor } from '../auth/interceptors/auth.interceptor';

const defaultUri = environment.defaultGraphUri;

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          link: httpLink.create({ uri: defaultUri }),
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class GraphQLModule {}

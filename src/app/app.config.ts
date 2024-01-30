import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  API_FACADE,
  API_SERVICE,
  API_URL,
  DEFAULT_PAGE_MODEL,
  INITIAL_ENTITIES_STATE,
  STORE_SERVICE,
  TABLE_CONFIG
} from 'eyhenij-rt-table';
import { TableApiFacade } from './table-api-facade';
import { TableApiService } from './table-api-service';
import { TableEntitiesStoreService } from './table-entities-store.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    {
      provide: API_URL,
      useValue: 'https://api.slingacademy.com/v1/sample-data'
    },
    {
      provide: TABLE_CONFIG,
      useValue: {
        autoLoading: true,
        id: 'someUniqueTableId',
        props: {
          test: true
        },
        columns: [
            {
                display: true,
                order: 1,
                header: 'First Name',
                propName: 'first_name',
                sorting: true,
                component: null,
            },
            {
                display: true,
                order: 2,
                header: 'Last Name',
                propName: 'last_name',
                sorting: true,
                component: null,
            },
            {
                display: true,
                order: 3,
                header: 'Email',
                propName: 'email',
                sorting: true,
                component: null,
            },
            {
                display: true,
                order: 4,
                header: 'ID',
                propName: 'id',
                sorting: true,
                component: null,
            }
        ]
      }
    },
    {
      provide: INITIAL_ENTITIES_STATE,
      useValue: {
        pageModel: DEFAULT_PAGE_MODEL,
        loading: true
      }
    },
    {
      provide: API_FACADE,
      useClass: TableApiFacade
    },
    {
      provide: API_SERVICE,
      useClass: TableApiService
    },
    {
      provide: STORE_SERVICE,
      useClass: TableEntitiesStoreService
    },
  ]
};

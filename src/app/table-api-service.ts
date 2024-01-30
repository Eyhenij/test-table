import { inject, Injectable } from '@angular/core';
import { API_FACADE, BaseApiService, IEntitiesApiFacade } from 'eyhenij-rt-table';
import { TableEntityModelMapper } from './table-entity-model.mapper';


@Injectable()
export class TableApiService extends BaseApiService<object, object, string> {
    protected override readonly mapper: TableEntityModelMapper = new TableEntityModelMapper();
    protected override readonly apiFacade: IEntitiesApiFacade<object, string> = inject(API_FACADE);
}

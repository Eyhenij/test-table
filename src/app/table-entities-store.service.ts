import { inject, Inject, Injectable, Optional } from '@angular/core';
import {
    API_SERVICE,
    BASE_INITIAL_STATE,
    BaseEntitiesStoreService,
    IEntitiesApiService,
    IEntitiesState, INITIAL_ENTITIES_STATE,
    TABLE_CONST
} from 'eyhenij-rt-table';


export type IBranchesUpsertEntitiesState = IEntitiesState<object, string>;

const initialState: IBranchesUpsertEntitiesState = {
    ...BASE_INITIAL_STATE.ENTITIES,
    sortModel: TABLE_CONST.DEFAULT_LIST_SORT_MODEL,
    entities: [],
};


/**
 * @description Service extends BaseEntitiesStoreService, you can override any method of base service here
 */
@Injectable()
export class TableEntitiesStoreService extends BaseEntitiesStoreService<any, string> {
    protected override readonly apiService: IEntitiesApiService<object, string> = inject(API_SERVICE);

    constructor(
        @Optional()
        @Inject(INITIAL_ENTITIES_STATE)
        protected override readonly providedInitialEntitiesState: Partial<IBranchesUpsertEntitiesState>,
    ) {
        super({ ...initialState, ...providedInitialEntitiesState });
    }
}

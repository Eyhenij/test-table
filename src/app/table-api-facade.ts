import { Injectable } from '@angular/core';
import {
    BaseApiFacade,
    generateGetListUrl,
    GridRequestInterface,
    Nullable,
    PaginationListApiModel
} from 'eyhenij-rt-table';
import { map, Observable } from 'rxjs';


@Injectable()
export class TableApiFacade extends BaseApiFacade<object, string> {
    protected override readonly getListUrl: Nullable<string> = 'users';

    public override getList(
        params: GridRequestInterface<string>,
        body: {}
    ): Observable<PaginationListApiModel<object>> {
        const newParams: GridRequestInterface<string> = {
            offset: params.page > 1 ? (params.page - 1) * params.limit : 0,
            limit: params.limit,
            search: params.search,
        } as unknown as GridRequestInterface<string>;

        return this.apiService.get<{ users: Array<any>; total_users: number; }, {}>(`${this.getListUrl}${generateGetListUrl(newParams)}`, body).pipe(
            map((response: { users: Array<any>; total_users: number; }): PaginationListApiModel<object> => {
                return {
                    data: response.users,
                    allCounts: response.total_users,
                };
            }
        ));
    }
}

import { IMapper } from 'eyhenij-rt-table';

export class TableEntityModelMapper implements IMapper<Record<string, any>, Record<string, any>>{

    public mapFrom(raw: Record<string, any>): Record<string, any> {
        return {
            id: raw?.id ?? null,
            first_name: raw?.first_name ?? null,
            last_name: raw?.last_name ?? null,
            email: raw?.email ?? null,
        };
    }
}

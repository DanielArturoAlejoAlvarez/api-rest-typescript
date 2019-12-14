import {createPool, Pool} from 'mysql2/promise';

import {Keys} from './config/keys';

export async function connect(): Promise<Pool> {
    const connection = await createPool(Keys);
    return connection;
}
// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import type { GetFooData } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export const getFoo = <ThrowOnError extends boolean = false>(options?: Options<GetFooData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        security: [
            {
                scheme: 'basic',
                type: 'http'
            }
        ],
        url: '/foo',
        ...options
    });
};
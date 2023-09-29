/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ObserveLedgerMovementsResponse } from '../models/v2ObserveLedgerMovementsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LedgerMovementsService {

    /**
     * Observe ledger movements
     * Subscribe to a stream of transfer responses
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveLedgerMovements(): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveLedgerMovementsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/ledger/movements',
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

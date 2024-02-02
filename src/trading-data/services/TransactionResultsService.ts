/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ObserveTransactionResultsResponse } from '../models/v2ObserveTransactionResultsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionResultsService {

    /**
     * Observe transaction results
     * Subscribe to a stream of transaction results, optionally filtered by party/hash/status
     * @param partyIds Restrict the transaction results streamed to those made by the given parties.
     * @param hashes Restrict the transaction results streamed to those with given hashes.
     * @param status Restrict the transaction results streamed to those with given status true/false (success/failure).
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveTransactionResults(
        partyIds?: Array<string>,
        hashes?: Array<string>,
        status?: boolean,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveTransactionResultsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/transaction-results',
            query: {
                'partyIds': partyIds,
                'hashes': hashes,
                'status': status,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

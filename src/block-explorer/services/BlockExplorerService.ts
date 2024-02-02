/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1GetTransactionResponse } from '../models/v1GetTransactionResponse';
import type { v1InfoResponse } from '../models/v1InfoResponse';
import type { v1ListTransactionsResponse } from '../models/v1ListTransactionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BlockExplorerService {

    /**
     * Info
     * Get information about the block explorer.
     * Response contains a semver formatted version of the data node and the commit hash, from which the block explorer was built
     * @returns v1InfoResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static blockExplorerInfo(): CancelablePromise<v1InfoResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/info',
        });
    }

    /**
     * List transactions
     * List transactions from the Vega blockchain from the newest to the oldest transactions.
     * @param before Cursor to paginate the request. It can be used in conjunction with the `after` cursor.
     * @param after Cursor to paginate the request. It can be used in conjunction with the `before` cursor.
     * @param cmdTypes Transaction command types filter, for listing transactions with specified command types.
     * @param excludeCmdTypes Transaction command types exclusion filter, for listing all the transactions except the ones with specified command types.
     * @param parties Party IDs filter, can be sender or receiver.
     * @param first Number of transactions to be returned from the blockchain.
     * Use in conjunction with the `after` cursor to paginate forwards. Paginating forwards means toward the most recent
     * transactions.
     * It cannot be used in conjunction with the `before` cursor.
     * On its own, this will return the `first` most recent transactions.
     * @param last Number of transactions to be returned from the blockchain.
     * Use in conjunction with the `before` cursor to paginate backwards. Paginating forwards means toward the least recent
     * transactions.
     * It cannot be used in conjunction with the `after` cursor.
     * On its own, this will return the `last` oldest transactions.
     * @returns v1ListTransactionsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static blockExplorerListTransactions(
        before?: string,
        after?: string,
        cmdTypes?: Array<string>,
        excludeCmdTypes?: Array<string>,
        parties?: Array<string>,
        first?: number,
        last?: number,
    ): CancelablePromise<v1ListTransactionsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions',
            query: {
                'before': before,
                'after': after,
                'cmdTypes': cmdTypes,
                'excludeCmdTypes': excludeCmdTypes,
                'parties': parties,
                'first': first,
                'last': last,
            },
        });
    }

    /**
     * Get transaction
     * Get a transaction from the Vega blockchain
     * @param hash Hash of the transaction
     * @returns v1GetTransactionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static blockExplorerGetTransaction(
        hash: string,
    ): CancelablePromise<v1GetTransactionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{hash}',
            path: {
                'hash': hash,
            },
        });
    }

}

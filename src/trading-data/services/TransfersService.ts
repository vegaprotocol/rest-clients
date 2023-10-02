/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetTransferResponse } from '../models/v2GetTransferResponse';
import type { v2ListTransfersResponse } from '../models/v2ListTransfersResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransfersService {

    /**
     * Get transfer by ID
     * Get a specific transfer by ID
     * @param transferId Transfer ID to request data for.
     * @returns v2GetTransferResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetTransfer(
        transferId: string,
    ): CancelablePromise<v2GetTransferResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfer/{transferId}',
            path: {
                'transferId': transferId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List transfers
     * Get a list of transfers between public keys. A valid value for public key can be one of:
     * - a party ID
     * - "network"
     * - "0000000000000000000000000000000000000000000000000000000000000000", the public key for the global rewards account
     * @param pubkey Restrict transfer to those where the given public key is a sender or receiver.
     * @param direction Restrict transfers to those in the given direction from the supplied public key.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListTransfersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListTransfers(
        pubkey?: string,
        direction: 'TRANSFER_DIRECTION_UNSPECIFIED' | 'TRANSFER_DIRECTION_TRANSFER_FROM' | 'TRANSFER_DIRECTION_TRANSFER_TO' | 'TRANSFER_DIRECTION_TRANSFER_TO_OR_FROM' = 'TRANSFER_DIRECTION_UNSPECIFIED',
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListTransfersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfers',
            query: {
                'pubkey': pubkey,
                'direction': direction,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

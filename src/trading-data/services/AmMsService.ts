/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListAMMsResponse } from '../models/v2ListAMMsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AmMsService {

    /**
     * List AMMs
     * Get a list of AMM or filter by market ID, party ID or AMM ID
     * @param id AMM ID to filter for. If party ID or market ID is provided, the ID filter is ignored.
     * @param partyId Party ID to filter for.
     * @param marketId Market ID to filter for. If party ID is provided, the market filter is ignored.
     * @param ammPartyId Party's underlying AMM sub-account to filter for. A party's AMM sub-account will remain the
     * same regardless of the AMM.
     * @param status Filter for AMMs with the given status. This filter will be ignored if any of the other
     * filters have been set.
     *
     * - STATUS_ACTIVE: AMM is active on the market and is posting tradable volume.
     * - STATUS_REJECTED: AMM submission was rejected.
     * - STATUS_CANCELLED: AMM has been cancelled by the owner and is no longer trading.
     * - STATUS_STOPPED: AMM has been stopped by the network and is no longer trading.
     * - STATUS_REDUCE_ONLY: AMM will only trade such that it will reduce its position.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListAMMsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAmMs(
        id?: string,
        partyId?: string,
        marketId?: string,
        ammPartyId?: string,
        status: 'STATUS_UNSPECIFIED' | 'STATUS_ACTIVE' | 'STATUS_REJECTED' | 'STATUS_CANCELLED' | 'STATUS_STOPPED' | 'STATUS_REDUCE_ONLY' = 'STATUS_UNSPECIFIED',
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListAMMsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/amms',
            query: {
                'id': id,
                'partyId': partyId,
                'marketId': marketId,
                'ammPartyId': ammPartyId,
                'status': status,
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

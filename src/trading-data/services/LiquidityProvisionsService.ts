/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListLiquidityProvisionsResponse } from '../models/v2ListLiquidityProvisionsResponse';
import type { v2ObserveLiquidityProvisionsResponse } from '../models/v2ObserveLiquidityProvisionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LiquidityProvisionsService {

    /**
     * List liquidity provisions
     * Get a list of liquidity provisions for a given market
     * @param marketId Restrict liquidity provision orders to those placed on the given market.
     * @param partyId Restrict liquidity provision orders to those placed by the given party.
     * @param reference Restrict liquidity provision orders to those with the given order reference.
     * @param live Whether to include live liquidity provision orders. If not set, live orders will not be included.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListLiquidityProvisionsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListLiquidityProvisions(
        marketId?: string,
        partyId?: string,
        reference?: string,
        live?: boolean,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListLiquidityProvisionsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/liquidity/provisions',
            query: {
                'marketId': marketId,
                'partyId': partyId,
                'reference': reference,
                'live': live,
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

    /**
     * Observe liquidity provisions
     * Subscribe to a stream of liquidity provision events for a given market and party
     * @param marketId Target market to observe for liquidity provision orders.
     * @param partyId Target party to observe for submitted liquidity provision orders.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveLiquidityProvisions(
        marketId?: string,
        partyId?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveLiquidityProvisionsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/liquidity-provisions',
            query: {
                'marketId': marketId,
                'partyId': partyId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

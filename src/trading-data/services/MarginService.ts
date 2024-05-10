/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListMarginLevelsResponse } from '../models/v2ListMarginLevelsResponse';
import type { v2ListPartyMarginModesResponse } from '../models/v2ListPartyMarginModesResponse';
import type { v2ObserveMarginLevelsResponse } from '../models/v2ObserveMarginLevelsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MarginService {

    /**
     * List margin modes per party per market
     * Get a list of all margin modes, or for a specific market ID, or party ID.
     * @param marketId Market ID to filter for.
     * @param partyId Party ID to filter for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListPartyMarginModesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListPartyMarginModes(
        marketId?: string,
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListPartyMarginModesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/margin-modes',
            query: {
                'marketId': marketId,
                'partyId': partyId,
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
     * List margin levels
     * Get a list of margin levels that match the provided criteria. If no filter is provided, all margin levels will be returned.
     * @param partyId Party ID for which to list the margin levels.
     * @param marketId Market ID for which to list the margin levels.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListMarginLevelsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListMarginLevels(
        partyId?: string,
        marketId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListMarginLevelsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/margin/levels',
            query: {
                'partyId': partyId,
                'marketId': marketId,
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
     * Observe margin levels
     * Subscribe to a stream of margin levels updates
     * @param partyId Restrict margin level updates to those relating to the given party.
     * @param marketId Restrict margin level updates to those relating to the given market.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveMarginLevels(
        partyId?: string,
        marketId?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveMarginLevelsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/margin/levels',
            query: {
                'partyId': partyId,
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetLastTradeResponse } from '../models/v2GetLastTradeResponse';
import type { v2ListTradesResponse } from '../models/v2ListTradesResponse';
import type { v2ObserveTradesResponse } from '../models/v2ObserveTradesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TradesService {

    /**
     * Get last trade
     * Get the last trade made for a given market.
     * @param marketId Market ID to retrieve the last trade for.
     * @returns v2GetLastTradeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetLastTrade(
        marketId: string,
    ): CancelablePromise<v2GetLastTradeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/market/{marketId}/trade/latest',
            path: {
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe trades
     * Subscribe to a stream of trades, optionally filtered by party/market
     * @param marketIds Restrict the trades streamed to those made on the given markets.
     * @param partyIds Restrict the trades streamed to those made by the given parties.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveTrades(
        marketIds?: Array<string>,
        partyIds?: Array<string>,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveTradesResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/trades',
            query: {
                'marketIds': marketIds,
                'partyIds': partyIds,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List trades
     * Get a list of all trades, optionally filtered by party/market/order
     * @param marketIds Restrict trades to those that occurred on the given markets.
     * @param orderIds Restrict trades to those that were caused by the given orders.
     * @param partyIds Restrict trades to those that were caused by orders placed by the given parties.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns v2ListTradesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListTrades(
        marketIds?: Array<string>,
        orderIds?: Array<string>,
        partyIds?: Array<string>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<v2ListTradesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/trades',
            query: {
                'marketIds': marketIds,
                'orderIds': orderIds,
                'partyIds': partyIds,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListCandleDataResponse } from '../models/v2ListCandleDataResponse';
import type { v2ListCandleIntervalsResponse } from '../models/v2ListCandleIntervalsResponse';
import type { v2ObserveCandleDataResponse } from '../models/v2ObserveCandleDataResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CandlesService {

    /**
     * List candle data
     * Get a list of candle data for a given candle ID.
     * A candle ID encapsulates a market ID and candle interval. A list of available candle IDs, and therefore candle intervals can be found using the list-candle-intervals API.
     * @param candleId Candle ID to retrieve candle data for.
     * @param fromTimestamp Timestamp in Unix nanoseconds to retrieve candles from.
     * @param toTimestamp Timestamp in Unix nanoseconds to retrieve candles to.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListCandleDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListCandleData(
        candleId: string,
        fromTimestamp?: string,
        toTimestamp?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListCandleDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/candle',
            query: {
                'candleId': candleId,
                'fromTimestamp': fromTimestamp,
                'toTimestamp': toTimestamp,
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
     * List candle intervals
     * Get a list of all available candle intervals for a given market along with the corresponding candle ID.
     * @param marketId Unique ID for the market to list candle intervals for.
     * @returns v2ListCandleIntervalsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListCandleIntervals(
        marketId: string,
    ): CancelablePromise<v2ListCandleIntervalsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/candle/intervals',
            query: {
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe candle data
     * Subscribe to a stream of candle updates given a candle ID.
     * A candle ID encapsulates a market ID and candle interval. A list of available candle IDs, and therefore candle intervals can be found using the list-candle-intervals API.
     * @param candleId Unique ID for the candle.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveCandleData(
        candleId: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveCandleDataResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/candle/data',
            query: {
                'candleId': candleId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

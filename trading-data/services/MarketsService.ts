/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetLatestMarketDataResponse } from '../models/v2GetLatestMarketDataResponse';
import type { v2GetLatestMarketDepthResponse } from '../models/v2GetLatestMarketDepthResponse';
import type { v2GetMarketDataHistoryByIDResponse } from '../models/v2GetMarketDataHistoryByIDResponse';
import type { v2GetMarketResponse } from '../models/v2GetMarketResponse';
import type { v2ListFundingPeriodDataPointsResponse } from '../models/v2ListFundingPeriodDataPointsResponse';
import type { v2ListFundingPeriodsResponse } from '../models/v2ListFundingPeriodsResponse';
import type { v2ListLatestMarketDataResponse } from '../models/v2ListLatestMarketDataResponse';
import type { v2ListMarketsResponse } from '../models/v2ListMarketsResponse';
import type { v2ListSuccessorMarketsResponse } from '../models/v2ListSuccessorMarketsResponse';
import type { v2ObserveMarketsDataResponse } from '../models/v2ObserveMarketsDataResponse';
import type { v2ObserveMarketsDepthResponse } from '../models/v2ObserveMarketsDepthResponse';
import type { v2ObserveMarketsDepthUpdatesResponse } from '../models/v2ObserveMarketsDepthUpdatesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MarketsService {

    /**
     * List funding period data points
     * Get a list of data points for a perpetual market's funding periods.
     * @param marketId Market ID to get funding period data points for.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @param source Restrict the data points to those with the given source type.
     *
     * - SOURCE_UNSPECIFIED: Default value
     * - SOURCE_EXTERNAL: Data point is from an external data source, such as an oracle, and represents the spot price of the underlying asset.
     * - SOURCE_INTERNAL: Data point from within Vega such as the mark price after performing mark-to-market.
     * @param seq Restrict the data points to those that contributed to the given funding period sequence.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListFundingPeriodDataPointsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListFundingPeriodDataPoints(
        marketId: string,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
        source: 'SOURCE_UNSPECIFIED' | 'SOURCE_EXTERNAL' | 'SOURCE_INTERNAL' = 'SOURCE_UNSPECIFIED',
        seq?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListFundingPeriodDataPointsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/funding-periods/data-points/{marketId}',
            path: {
                'marketId': marketId,
            },
            query: {
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
                'source': source,
                'seq': seq,
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
     * List funding periods
     * Get a list of funding periods for a perpetual market.
     * @param marketId Market ID to get funding periods for.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListFundingPeriodsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListFundingPeriods(
        marketId: string,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListFundingPeriodsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/funding-periods/{marketId}',
            path: {
                'marketId': marketId,
            },
            query: {
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
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
     * Get market data history
     * Get market data history for a market ID from between a given date range
     * @param marketId Market ID to request data history for.
     * @param startTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param endTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2GetMarketDataHistoryByIDResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetMarketDataHistoryById(
        marketId: string,
        startTimestamp?: string,
        endTimestamp?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2GetMarketDataHistoryByIDResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/market/data/{marketId}',
            path: {
                'marketId': marketId,
            },
            query: {
                'startTimestamp': startTimestamp,
                'endTimestamp': endTimestamp,
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
     * Get latest market data
     * Get the latest market data for a given market
     * @param marketId Market ID to retrieve market data for.
     * @returns v2GetLatestMarketDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetLatestMarketData(
        marketId: string,
    ): CancelablePromise<v2GetLatestMarketDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/market/data/{marketId}/latest',
            path: {
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get latest market depth
     * Get the latest market depth for a given market
     * @param marketId Market ID to request market depth for, required field.
     * @param maxDepth Maximum market depth.
     * @returns v2GetLatestMarketDepthResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetLatestMarketDepth(
        marketId: string,
        maxDepth?: string,
    ): CancelablePromise<v2GetLatestMarketDepthResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/market/depth/{marketId}/latest',
            path: {
                'marketId': marketId,
            },
            query: {
                'maxDepth': maxDepth,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get market
     * Get information about a specific market using its ID. A market's ID will be the same as the ID of the proposal that
     * generated it
     * @param marketId Market ID of the market to retrieve data for.
     * @returns v2GetMarketResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetMarket(
        marketId: string,
    ): CancelablePromise<v2GetMarketResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/market/{marketId}',
            path: {
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List markets
     * Get a list of markets
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param includeSettled Whether to include settled markets. If not set, settled markets will be included.
     * @returns v2ListMarketsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListMarkets(
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        includeSettled?: boolean,
    ): CancelablePromise<v2ListMarketsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/markets',
            query: {
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'includeSettled': includeSettled,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List latest market data
     * Get a list of the latest market data for every market
     * @returns v2ListLatestMarketDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListLatestMarketData(): CancelablePromise<v2ListLatestMarketDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/markets/data',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe markets data
     * Subscribe to a stream of data about a given market
     * @param marketIds Restrict updates to market data by the given market IDs.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveMarketsData(
        marketIds?: Array<string>,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveMarketsDataResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/markets/data',
            query: {
                'marketIds': marketIds,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe markets depth
     * Subscribe to a stream of the latest market depth for a given market
     * @param marketIds Restrict market depth data by the given market IDs.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveMarketsDepth(
        marketIds?: Array<string>,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveMarketsDepthResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/markets/depth',
            query: {
                'marketIds': marketIds,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe markets depth updates
     * Subscribe to a stream of updates on market depth for a given market
     * @param marketIds Restrict updates to market depth by the given market IDs.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveMarketsDepthUpdates(
        marketIds?: Array<string>,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveMarketsDepthUpdatesResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/markets/depth/updates',
            query: {
                'marketIds': marketIds,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List successor markets
     * Given a market ID, return the full lineage of markets since inception, or all successor markets since and including
     * the given market ID. The markets will be returned in succession order, i.e. the market at position i will be the parent
     * of the market at position i+1.
     * @param marketId Market ID that is a member of the succession line. This can be the original market
     * or any subsequent child market that succeeded it.
     * @param includeFullHistory Flag to indicate whether or not to include the full succession line, or only list
     * the children of the given market ID. If true, the full succession line is included.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListSuccessorMarketsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListSuccessorMarkets(
        marketId: string,
        includeFullHistory?: boolean,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListSuccessorMarketsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/successor_markets/{marketId}',
            path: {
                'marketId': marketId,
            },
            query: {
                'includeFullHistory': includeFullHistory,
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

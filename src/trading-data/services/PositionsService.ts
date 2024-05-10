/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2EstimatePositionResponse } from '../models/v2EstimatePositionResponse';
import type { v2GetTimeWeightedNotionalPositionResponse } from '../models/v2GetTimeWeightedNotionalPositionResponse';
import type { v2ListAllPositionsResponse } from '../models/v2ListAllPositionsResponse';
import type { v2ObservePositionsResponse } from '../models/v2ObservePositionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PositionsService {

    /**
     * Estimate position
     * Estimate the margin that would be required for maintaining the specified position, collateral increase needed to open the specified position and the liquidation price estimate.
     * Margin estimates are scaled to asset decimal places.
     * Liquidation price estimates are scaled to asset decimal places by default, unless an argument to scale to market decimal places is specified in the request.
     * @param marketId Market ID to estimate position for.
     * @param openVolume Open volume. This field is a signed integer scaled to the market's position decimal places.
     * A negative number denotes a short position.
     * @param averageEntryPrice Average entry price corresponding to the open volume. The price is an unsigned integer. For example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     * @param marginAccountBalance Margin account balance. Needs to scaled by asset decimal places.
     * @param generalAccountBalance General account balance. Needs to scaled by asset decimal places.
     * @param orderMarginAccountBalance Order margin account balance. Needs to be scaled by asset decimal places.
     * @param marginMode Margin mode for the party, cross margin or isolated margin.
     *
     * - MARGIN_MODE_UNSPECIFIED: Never valid.
     * - MARGIN_MODE_CROSS_MARGIN: Cross margin mode - margin is dynamically acquired and released as a position is marked to market
     * - MARGIN_MODE_ISOLATED_MARGIN: Isolated margin mode - margin for any newly opened position volume is transferred to the margin account when the trade is executed
     * @param marginFactor Margin factor to be used along with isolated margin mode.
     * @param includeRequiredPositionMarginInAvailableCollateral Whether the estimated position margin increase should be included in available collateral for liquidation price calculation in isolated margin mode.
     * @param scaleLiquidationPriceToMarketDecimals Whether the liquidation price estimates should be scaled to market decimal places or by asset decimal places. If not set, asset decimal places are used.
     * @returns v2EstimatePositionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceEstimatePosition(
        marketId: string,
        openVolume: string,
        averageEntryPrice: string,
        marginAccountBalance: string,
        generalAccountBalance: string,
        orderMarginAccountBalance: string,
        marginMode: 'MARGIN_MODE_UNSPECIFIED' | 'MARGIN_MODE_CROSS_MARGIN' | 'MARGIN_MODE_ISOLATED_MARGIN' = 'MARGIN_MODE_UNSPECIFIED',
        marginFactor?: string,
        includeRequiredPositionMarginInAvailableCollateral?: boolean,
        scaleLiquidationPriceToMarketDecimals?: boolean,
    ): CancelablePromise<v2EstimatePositionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/estimate/position',
            query: {
                'marketId': marketId,
                'openVolume': openVolume,
                'averageEntryPrice': averageEntryPrice,
                'marginAccountBalance': marginAccountBalance,
                'generalAccountBalance': generalAccountBalance,
                'orderMarginAccountBalance': orderMarginAccountBalance,
                'marginMode': marginMode,
                'marginFactor': marginFactor,
                'includeRequiredPositionMarginInAvailableCollateral': includeRequiredPositionMarginInAvailableCollateral,
                'scaleLiquidationPriceToMarketDecimals': scaleLiquidationPriceToMarketDecimals,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List positions
     * Get a list of all of a party's positions
     * @param filterPartyIds Restrict positions to those related to the given parties.
     * @param filterMarketIds Restrict positions to those on the given markets.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListAllPositionsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAllPositions(
        filterPartyIds?: Array<string>,
        filterMarketIds?: Array<string>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListAllPositionsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/positions',
            query: {
                'filter.partyIds': filterPartyIds,
                'filter.marketIds': filterMarketIds,
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
     * Observe positions
     * Subscribe to a stream of position updates. The first messages sent through the stream will contain
     * information about current positions, followed by updates to those positions.
     * @param partyId Restrict position updates to those related to the given parties.
     * @param marketId Restrict position updates to those related to the given markets.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObservePositions(
        partyId?: string,
        marketId?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObservePositionsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/positions',
            query: {
                'partyId': partyId,
                'marketId': marketId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get time weighted notional position
     * Get the time weighted notional position for a given party and asset. The time weighted notional position
     * is used to check if a party qualifies for a reward.
     * If no epoch is specified, the final time weighted notional position from the end of the most recently completed epoch is returned.
     * If an epoch is specified, the final time weighted notional position at that epoch is returned.
     * @param assetId Asset ID to filter for.
     * @param partyId Party ID to filter for.
     * @param gameId Game ID to filter for.
     * @param atEpoch Epoch to filter for.
     * @returns v2GetTimeWeightedNotionalPositionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetTimeWeightedNotionalPosition(
        assetId?: string,
        partyId?: string,
        gameId?: string,
        atEpoch?: string,
    ): CancelablePromise<v2GetTimeWeightedNotionalPositionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/time-weighted-notional-position',
            query: {
                'assetId': assetId,
                'partyId': partyId,
                'gameId': gameId,
                'atEpoch': atEpoch,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

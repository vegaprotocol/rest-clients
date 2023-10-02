/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2EstimatePositionResponse } from '../models/v2EstimatePositionResponse';
import type { v2ListAllPositionsResponse } from '../models/v2ListAllPositionsResponse';
import type { v2ObservePositionsResponse } from '../models/v2ObservePositionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PositionsService {

    /**
     * Estimate position
     * Estimate the margin that would be required for maintaining the specified position.
     * If the optional collateral available argument is supplied, the response also contains the estimate of the liquidation price.
     * @param marketId Market ID to estimate position for.
     * @param openVolume Open volume. This field is a signed integer scaled to the market's position decimal places.
     * A negative number denotes a short position.
     * @param collateralAvailable Optional argument specifying collateral available for the position, if provided then response will contain the liquidation price estimate.
     * @returns v2EstimatePositionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceEstimatePosition(
        marketId: string,
        openVolume: string,
        collateralAvailable?: string,
    ): CancelablePromise<v2EstimatePositionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/estimate/position',
            query: {
                'marketId': marketId,
                'openVolume': openVolume,
                'collateralAvailable': collateralAvailable,
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

}

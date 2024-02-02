/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListAllLiquidityProvisionsResponse } from '../models/v2ListAllLiquidityProvisionsResponse';
import type { v2ListLiquidityProvidersResponse } from '../models/v2ListLiquidityProvidersResponse';
import type { v2ListLiquidityProvisionsResponse } from '../models/v2ListLiquidityProvisionsResponse';
import type { v2ListPaidLiquidityFeesResponse } from '../models/v2ListPaidLiquidityFeesResponse';
import type { v2ObserveLiquidityProvisionsResponse } from '../models/v2ObserveLiquidityProvisionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LiquidityService {

    /**
     * List liquidity provisions
     * Get a list of liquidity provisions for a given market. This API returns a current and pending liquidity provision
     * in the event that a provision has been updated by the provider but the updated provision will not be active until the next epoch.
     * @param marketId Restrict liquidity provisions to those placed on the given market.
     * @param partyId Restrict liquidity provisions to those placed by the given party.
     * @param reference Restrict liquidity provisions to those with the given order reference.
     * @param live Whether to include live liquidity provisions. If not set, live orders will not be included.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListAllLiquidityProvisionsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAllLiquidityProvisions(
        marketId?: string,
        partyId?: string,
        reference?: string,
        live?: boolean,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListAllLiquidityProvisionsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/liquidity/all-provisions',
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
     * List paid liquidity fees data
     * List information about paid liquidity fees for a given market, or asset ID.
     * @param marketId Restrict fee data to those fees generated in the given market.
     * @param assetId Restrict fee statistics to those paid in the given asset.
     * @param epochSeq Epoch to get paid liquidity fee statistics for. If omitted, the last complete epoch is used.
     * @param partyIds Restrict fee data to those fees paid to the given parties.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListPaidLiquidityFeesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListPaidLiquidityFees(
        marketId?: string,
        assetId?: string,
        epochSeq?: string,
        partyIds?: Array<string>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListPaidLiquidityFeesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/liquidity/paidfees',
            query: {
                'marketId': marketId,
                'assetId': assetId,
                'epochSeq': epochSeq,
                'partyIds': partyIds,
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
     * List liquidity providers data
     * List information about active liquidity provider(s) for a given market, or liquidity provider's party ID.
     * @param marketId Market ID to retrieve liquidity providers for. If omitted, you must provide a party ID.
     * @param partyId Party ID to retrieve data for. If omitted, you must provide a market ID.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListLiquidityProvidersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListLiquidityProviders(
        marketId?: string,
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListLiquidityProvidersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/liquidity/providers',
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
     * List liquidity provisions
     * DEPRECATED: When a liquidity provider amends a provision, and it's accepted by the network, the pending
     * provision is returned by the API instead of the provision that is currently active.
     * Use ListAllLiquidityProvisions instead.
     * @param marketId Restrict liquidity provisions to those placed on the given market.
     * @param partyId Restrict liquidity provisions to those placed by the given party.
     * @param reference Restrict liquidity provisions to those with the given order reference.
     * @param live Whether to include live liquidity provisions. If not set, live orders will not be included.
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
     * @param marketId Target market to observe for liquidity provisions.
     * @param partyId Target party to observe for submitted liquidity provisions.
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

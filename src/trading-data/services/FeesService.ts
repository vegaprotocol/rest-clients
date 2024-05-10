/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetFeesStatsForPartyResponse } from '../models/v2GetFeesStatsForPartyResponse';
import type { v2GetFeesStatsResponse } from '../models/v2GetFeesStatsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FeesService {

    /**
     * Get fees statistics
     * Get accumulated fees, rewards, and applied discount information. Either a market or an asset must be supplied as a filter.
     * @param marketId Restrict fee statistics to those related to the given market.
     * @param assetId Restrict fee statistics to those related to the given asset.
     * @param epochSeq Epoch to get referral fee statistics for. If not set, the last complete epoch is used.
     * @param partyId Restrict fee statistics to those for the given party.
     * @returns v2GetFeesStatsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetFeesStats(
        marketId?: string,
        assetId?: string,
        epochSeq?: string,
        partyId?: string,
    ): CancelablePromise<v2GetFeesStatsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/fees/stats',
            query: {
                'marketId': marketId,
                'assetId': assetId,
                'epochSeq': epochSeq,
                'partyId': partyId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get fees statistics for a party
     * Get accumulated fees, rewards, and applied discount information. A party ID must be supplied as a filter.
     * @param partyId Restrict fees statistics to those for the given party.
     * @param assetId Restrict fees statistics to those related to the given asset.
     * @param fromEpoch Epoch to filter from (included). If omitted, the range goes from the oldest epoch to the `to epoch`.
     * @param toEpoch Epoch to filter to (included). If omitted, the range goes from `from epoch` to the most recent epoch.
     * @returns v2GetFeesStatsForPartyResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetFeesStatsForParty(
        partyId: string,
        assetId?: string,
        fromEpoch?: string,
        toEpoch?: string,
    ): CancelablePromise<v2GetFeesStatsForPartyResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/fees/stats/parties/{partyId}',
            path: {
                'partyId': partyId,
            },
            query: {
                'assetId': assetId,
                'fromEpoch': fromEpoch,
                'toEpoch': toEpoch,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

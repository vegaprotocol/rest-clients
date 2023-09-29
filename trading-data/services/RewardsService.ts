/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListEpochRewardSummariesResponse } from '../models/v2ListEpochRewardSummariesResponse';
import type { v2ListRewardsResponse } from '../models/v2ListRewardsResponse';
import type { v2ListRewardSummariesResponse } from '../models/v2ListRewardSummariesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RewardsService {

    /**
     * List rewards
     * Get a list of rewards that match the provided criteria. If no filter is provided, all rewards will be returned.
     * @param partyId Restrict rewards data to those that were received by the given party.
     * @param assetId Restrict rewards data to those that were paid with the given asset ID.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param fromEpoch Restrict rewards data to those that were paid after and including the given epoch ID.
     * @param toEpoch Restrict rewards data to those that were paid up to and including the given epoch ID.
     * @returns v2ListRewardsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListRewards(
        partyId?: string,
        assetId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        fromEpoch?: string,
        toEpoch?: string,
    ): CancelablePromise<v2ListRewardsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/rewards',
            query: {
                'partyId': partyId,
                'assetId': assetId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'fromEpoch': fromEpoch,
                'toEpoch': toEpoch,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List epoch reward summaries
     * Get a list of reward summaries by epoch for a given range of epochs.
     * The result is filtered by list of asset IDs, market IDs and starting and ending epochs, for which to return rewards.
     * If no data is provided, all reward summaries will be returned, grouped by epochs, market IDs, asset IDs and reward type.
     * @param filterAssetIds Restrict reward summaries to those connected to the assets in the given list.
     * @param filterMarketIds Restrict reward summaries to those connected to the markets in the given list.
     * @param filterFromEpoch Restrict rewards summaries to those that were paid after and including the given epoch ID.
     * @param filterToEpoch Restrict rewards summaries to those that were paid up to and including the given epoch ID.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListEpochRewardSummariesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListEpochRewardSummaries(
        filterAssetIds?: Array<string>,
        filterMarketIds?: Array<string>,
        filterFromEpoch?: string,
        filterToEpoch?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListEpochRewardSummariesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/rewards/epoch/summaries',
            query: {
                'filter.assetIds': filterAssetIds,
                'filter.marketIds': filterMarketIds,
                'filter.fromEpoch': filterFromEpoch,
                'filter.toEpoch': filterToEpoch,
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
     * List reward summaries
     * Get a list of reward summaries where the reward amount is the total rewards received over all epochs
     * per party ID and asset ID.
     * Request parameters are optional party ID and asset ID.
     * If no data is provided, all reward summaries will be returned grouped by party and asset ID.
     * @param partyId Restrict the reward summary to rewards paid to the given parties.
     * @param assetId Restrict the reward summary to rewards paid in the given assets.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListRewardSummariesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListRewardSummaries(
        partyId?: string,
        assetId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListRewardSummariesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/rewards/summaries',
            query: {
                'partyId': partyId,
                'assetId': assetId,
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

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetCurrentReferralProgramResponse } from '../models/v2GetCurrentReferralProgramResponse';
import type { v2GetPartyActivityStreakResponse } from '../models/v2GetPartyActivityStreakResponse';
import type { v2GetReferralSetStatsResponse } from '../models/v2GetReferralSetStatsResponse';
import type { v2ListReferralSetRefereesResponse } from '../models/v2ListReferralSetRefereesResponse';
import type { v2ListReferralSetsResponse } from '../models/v2ListReferralSetsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReferralProgramService {

    /**
     * List party activity streak
     * Get a party's activity across epochs.
     * @param partyId Party ID to get the activity streak for.
     * @param epoch Epoch to get the activity streak for. If not set, the last complete epoch is used.
     * @returns v2GetPartyActivityStreakResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetPartyActivityStreak(
        partyId: string,
        epoch?: string,
    ): CancelablePromise<v2GetPartyActivityStreakResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/party/activity/streak/{partyId}',
            path: {
                'partyId': partyId,
            },
            query: {
                'epoch': epoch,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get current referral program
     * Get the current referral program for the network. This program may not be active if it has ended
     * and has not been replaced by another.
     * @returns v2GetCurrentReferralProgramResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetCurrentReferralProgram(): CancelablePromise<v2GetCurrentReferralProgramResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/referral-programs/current',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List referral sets
     * List all referral sets, or a specific referral set if you know its ID.
     * @param referralSetId Referral set ID to retrieve information for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param referrer Referrer to filter by. If referrer set ID is provided, this field is ignored.
     * @param referee Referee to filter by. If referrer set ID or referrer is provided, this field is ignored.
     * @returns v2ListReferralSetsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListReferralSets(
        referralSetId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        referrer?: string,
        referee?: string,
    ): CancelablePromise<v2ListReferralSetsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/referral-sets',
            query: {
                'referralSetId': referralSetId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'referrer': referrer,
                'referee': referee,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List referral set referees
     * List all referees that belong to a referral set.
     * @param referralSetId Referral set ID to retrieve information for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param referrer Referrer to filter by. If referrer set ID is provided, this field is ignored.
     * @param referee Referee to filter by. If referrer set ID or referrer is provided, this field is ignored.
     * @param aggregationEpochs Epochs to aggregate party volume and rewards over. If omitted, 30 epochs will be used.
     * @returns v2ListReferralSetRefereesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListReferralSetReferees(
        referralSetId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        referrer?: string,
        referee?: string,
        aggregationEpochs?: number,
    ): CancelablePromise<v2ListReferralSetRefereesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/referral-sets/referees',
            query: {
                'referralSetId': referralSetId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'referrer': referrer,
                'referee': referee,
                'aggregationEpochs': aggregationEpochs,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get referral set statistics
     * Get the total taker volume, and each referee's taker volume and, reward and discount factors for a referral set
     * at the latest or a specific epoch. You can also optionally filter for a specific referee's statistics.
     * @param referralSetId Restrict referral set statistics to those for the given referral set.
     * @param atEpoch Epoch to get referral set statistics for. If not set, the last complete epoch is used.
     * @param referee Restrict referral set statistics to those for the given referee.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2GetReferralSetStatsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetReferralSetStats(
        referralSetId?: string,
        atEpoch?: string,
        referee?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2GetReferralSetStatsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/referral-sets/stats',
            query: {
                'referralSetId': referralSetId,
                'atEpoch': atEpoch,
                'referee': referee,
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

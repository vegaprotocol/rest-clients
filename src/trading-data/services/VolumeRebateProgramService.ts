/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetCurrentVolumeRebateProgramResponse } from '../models/v2GetCurrentVolumeRebateProgramResponse';
import type { v2GetVolumeRebateStatsResponse } from '../models/v2GetVolumeRebateStatsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VolumeRebateProgramService {

    /**
     * Get current volume rebate program
     * Get the current volume rebate program for the network. This program may not be active if it has ended
     * and has not been replaced by another.
     * @returns v2GetCurrentVolumeRebateProgramResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetCurrentVolumeRebateProgram(): CancelablePromise<v2GetCurrentVolumeRebateProgramResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/volume-rebate-programs/current',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get volume rebate statistics
     * Get the information about a party's running traded volume, and the rebate factor it earns them.
     * @param atEpoch Epoch to get volume rebate statistics for. If not set, last epoch is used.
     * @param partyId Restrict volume discount statistics to those for the given party.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2GetVolumeRebateStatsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetVolumeRebateStats(
        atEpoch?: string,
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2GetVolumeRebateStatsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/volume-rebate-programs/stats',
            query: {
                'atEpoch': atEpoch,
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

}

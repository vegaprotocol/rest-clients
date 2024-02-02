/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetCurrentVolumeDiscountProgramResponse } from '../models/v2GetCurrentVolumeDiscountProgramResponse';
import type { v2GetVolumeDiscountStatsResponse } from '../models/v2GetVolumeDiscountStatsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VolumeDiscountProgramService {

    /**
     * Get current volume discount program
     * Get the current volume discount program for the network. This program may not be active if it has ended
     * and has not been replaced by another.
     * @returns v2GetCurrentVolumeDiscountProgramResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetCurrentVolumeDiscountProgram(): CancelablePromise<v2GetCurrentVolumeDiscountProgramResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/volume-discount-programs/current',
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Get volume discount statistics
     * Get the information about a party's running traded volume, and the discount factor it earns them.
     * @param atEpoch Epoch to get volume discount statistics for. If not set, last epoch is used.
     * @param partyId Restrict volume discount statistics to those for the given party.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2GetVolumeDiscountStatsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetVolumeDiscountStats(
        atEpoch?: string,
        partyId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2GetVolumeDiscountStatsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/volume-discount-programs/stats',
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

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetPartyVestingStatsResponse } from '../models/v2GetPartyVestingStatsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VestingService {

    /**
     * Get vesting balance statistics
     * Get information about a party's vesting rewards
     * @param partyId Party ID to query the vesting stats for.
     * @returns v2GetPartyVestingStatsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetPartyVestingStats(
        partyId: string,
    ): CancelablePromise<v2GetPartyVestingStatsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/party/vesting/stats/{partyId}',
            path: {
                'partyId': partyId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

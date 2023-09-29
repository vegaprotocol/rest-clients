/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetPartyActivityStreakResponse } from '../models/v2GetPartyActivityStreakResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReferralsService {

    /**
     * List party activity streak
     * Get a party's activity across epochs
     * @param partyId The party ID.
     * @param epoch An optional epoch, returns last if not specified.
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

}

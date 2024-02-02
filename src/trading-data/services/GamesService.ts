/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListGamesResponse } from '../models/v2ListGamesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GamesService {

    /**
     * List games
     * Get a list of games and corresponding game data, given the provided filters
     * @param gameId Game ID to filter for.
     * @param epochFrom First epoch to retrieve game data from. If not provided, defaults to the last epoch minus 30,
     * or the first epoch available if not enough epochs have passed.
     * @param epochTo Last epoch to retrieve game data to (inclusive). If not provided, defaults to the last epoch.
     * @param entityScope Entity scope to filter games for, i.e. team games or individual games only.
     *
     * - ENTITY_SCOPE_INDIVIDUALS: Rewards must be distributed directly to eligible parties.
     * - ENTITY_SCOPE_TEAMS: Rewards must be distributed to directly eligible teams, and then amongst team members
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListGamesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListGames(
        gameId?: string,
        epochFrom?: string,
        epochTo?: string,
        entityScope: 'ENTITY_SCOPE_UNSPECIFIED' | 'ENTITY_SCOPE_INDIVIDUALS' | 'ENTITY_SCOPE_TEAMS' = 'ENTITY_SCOPE_UNSPECIFIED',
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListGamesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/games',
            query: {
                'gameId': gameId,
                'epochFrom': epochFrom,
                'epochTo': epochTo,
                'entityScope': entityScope,
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

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
     * @param epochFrom Oldest epoch to retrieve game data from, inclusive. The maximum range of epochs that can be fetched at once is 30.
     * If not provided, defaults to the 'to' epoch minus 29, or the first epoch available if not enough epochs have passed.
     * If the 'to' epoch is not specified, it will be set to the chosen 'from' epoch + 29.
     * @param epochTo Most recent epoch to retrieve game data to, inclusive. If not provided, defaults to the latest epoch. The maximum range of epochs that can be fetched at once is 30.
     * If no 'from' epoch is provided, or the 'from' epoch is out of range, i.e., the 'to' epoch - 'from' epoch > 29,
     * the 'from' epoch will be set to the 'to' epoch - 29.
     * @param entityScope Entity scope to filter games for, i.e. team games or individual games only.
     *
     * - ENTITY_SCOPE_INDIVIDUALS: Rewards must be distributed directly to eligible parties.
     * - ENTITY_SCOPE_TEAMS: Rewards must be distributed to directly eligible teams, and then amongst team members
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param teamId Team ID to filter for. This filter will only be applied if entity scope is not specified
     * in the request, or the entity scope is set to teams.
     * @param partyId Party ID to filter for. This filter will apply regardless of the entity scope.
     * If the entity scope filter is teams, then the party ID filter will apply to team members.
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
        teamId?: string,
        partyId?: string,
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
                'teamId': teamId,
                'partyId': partyId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

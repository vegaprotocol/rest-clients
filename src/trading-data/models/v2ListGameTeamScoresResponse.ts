/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GameTeamScoresConnection } from './v2GameTeamScoresConnection';

/**
 * Response received from the query for getting a list of game scores for teams.
 */
export type v2ListGameTeamScoresResponse = {
    /**
     * Page of team game scores data and corresponding page information.
     */
    teamScores?: v2GameTeamScoresConnection;
};


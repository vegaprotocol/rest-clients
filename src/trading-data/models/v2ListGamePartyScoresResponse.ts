/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GamePartyScoresConnection } from './v2GamePartyScoresConnection';

/**
 * Response received from the query for getting a list of game scores for teams.
 */
export type v2ListGamePartyScoresResponse = {
    /**
     * Page of party game scores data and corresponding page information.
     */
    partyScores?: v2GamePartyScoresConnection;
};


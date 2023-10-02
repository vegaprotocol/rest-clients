/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamRefereeHistoryConnection } from './v2TeamRefereeHistoryConnection';

/**
 * Response that is sent when listing the referee history for a given team.
 */
export type v2ListTeamRefereeHistoryResponse = {
    /**
     * Page of team referee history data and corresponding page information.
     */
    teamRefereeHistory?: v2TeamRefereeHistoryConnection;
};


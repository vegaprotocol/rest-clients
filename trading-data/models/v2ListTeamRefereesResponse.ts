/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamRefereeConnection } from './v2TeamRefereeConnection';

/**
 * Response that is sent when listing the referees for a given team.
 */
export type v2ListTeamRefereesResponse = {
    /**
     * Page of team referee data and corresponding page information.
     */
    teamReferees?: v2TeamRefereeConnection;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1TeamMemberStats } from './v1TeamMemberStats';

export type v1TeamStats = {
    /**
     * Statistics for each team member.
     */
    membersStats?: Array<v1TeamMemberStats>;
    /**
     * The unique identifier of the team.
     */
    teamId?: string;
};


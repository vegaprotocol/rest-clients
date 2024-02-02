/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamMemberStatistics } from './v2TeamMemberStatistics';

/**
 * Team member data item with the corresponding cursor.
 */
export type v2TeamMemberStatisticsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Team member's statistics data.
     */
    node?: v2TeamMemberStatistics;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TeamMemberStatisticsEdge } from './v2TeamMemberStatisticsEdge';

/**
 * Page of team members' statistics and corresponding page information.
 */
export type v2TeamMembersStatisticsConnection = {
    /**
     * Page of team member data and their corresponding cursors.
     */
    edges?: Array<v2TeamMemberStatisticsEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


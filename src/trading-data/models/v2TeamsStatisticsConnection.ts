/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TeamStatisticsEdge } from './v2TeamStatisticsEdge';

/**
 * Page of teams' statistics and corresponding page information.
 */
export type v2TeamsStatisticsConnection = {
    /**
     * Page of team data and their corresponding cursors.
     */
    edges?: Array<v2TeamStatisticsEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GameTeamScoresEdge } from './v2GameTeamScoresEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of team game scores data and corresponding page information.
 */
export type v2GameTeamScoresConnection = {
    /**
     * Page of orders and their corresponding cursors.
     */
    edges?: Array<v2GameTeamScoresEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


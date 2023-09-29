/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TeamRefereeHistoryEdge } from './v2TeamRefereeHistoryEdge';

/**
 * Page of history data about a referee's team membership and corresponding page information.
 */
export type v2TeamRefereeHistoryConnection = {
    /**
     * Page of team referee history data and their corresponding cursors.
     */
    edges?: Array<v2TeamRefereeHistoryEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


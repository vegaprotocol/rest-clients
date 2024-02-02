/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamRefereeHistory } from './v2TeamRefereeHistory';

/**
 * Team referee history data item with the corresponding cursor.
 */
export type v2TeamRefereeHistoryEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Team referee data.
     */
    node?: v2TeamRefereeHistory;
};


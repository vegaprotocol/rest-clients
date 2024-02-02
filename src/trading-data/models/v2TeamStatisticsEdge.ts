/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamStatistics } from './v2TeamStatistics';

/**
 * Team data item with the corresponding cursor.
 */
export type v2TeamStatisticsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Team's statistics data.
     */
    node?: v2TeamStatistics;
};


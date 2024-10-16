/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2VolumeRebateStats } from './v2VolumeRebateStats';

/**
 * Volume rebate stats data with the corresponding cursor.
 */
export type v2VolumeRebateStatsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Volume rebate stats data.
     */
    node?: v2VolumeRebateStats;
};


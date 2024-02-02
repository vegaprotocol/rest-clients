/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2VolumeDiscountStats } from './v2VolumeDiscountStats';

/**
 * Volume discount stats data with the corresponding cursor.
 */
export type v2VolumeDiscountStatsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Volume discount stats data.
     */
    node?: v2VolumeDiscountStats;
};


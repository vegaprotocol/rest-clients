/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2VolumeRebateStatsEdge } from './v2VolumeRebateStatsEdge';

/**
 * Page of volume rebate stats data and corresponding page information.
 */
export type v2VolumeRebateStatsConnection = {
    /**
     * Page of volume rebate statistics data and their corresponding cursors.
     */
    edges?: Array<v2VolumeRebateStatsEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2VolumeDiscountStatsEdge } from './v2VolumeDiscountStatsEdge';

/**
 * Page of volume discount stats data and corresponding page information.
 */
export type v2VolumeDiscountStatsConnection = {
    /**
     * Page of volume discount statistics data and their corresponding cursors.
     */
    edges?: Array<v2VolumeDiscountStatsEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


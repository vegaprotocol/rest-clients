/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2RewardEdge } from './v2RewardEdge';

/**
 * Page of rewards data and corresponding page information.
 */
export type v2RewardsConnection = {
    /**
     * Page of rewards data items and their corresponding cursors.
     */
    edges?: Array<v2RewardEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


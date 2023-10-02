/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaReward } from './vegaReward';

/**
 * Rewards data with the corresponding cursor.
 */
export type v2RewardEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Details for a single reward payment.
     */
    node?: vegaReward;
};


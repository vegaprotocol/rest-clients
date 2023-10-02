/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaEpochRewardSummary } from './vegaEpochRewardSummary';

/**
 * Rewards summary data for epoch with the corresponding cursor.
 */
export type v2EpochRewardSummaryEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Rewards summary data for epoch.
     */
    node?: vegaEpochRewardSummary;
};


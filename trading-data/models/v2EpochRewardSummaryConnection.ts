/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2EpochRewardSummaryEdge } from './v2EpochRewardSummaryEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2EpochRewardSummaryConnection = {
    /**
     * Page of rewards summary data for epochs and their corresponding cursors.
     */
    edges?: Array<v2EpochRewardSummaryEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


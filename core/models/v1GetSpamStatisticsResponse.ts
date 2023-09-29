/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1SpamStatistics } from './v1SpamStatistics';

export type v1GetSpamStatisticsResponse = {
    /**
     * Chain ID for which the statistics are captured.
     */
    chainId?: string;
    statistics?: v1SpamStatistics;
};


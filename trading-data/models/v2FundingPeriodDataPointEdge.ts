/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1FundingPeriodDataPoint } from './v1FundingPeriodDataPoint';

/**
 * Funding period data point with the corresponding cursor.
 */
export type v2FundingPeriodDataPointEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Funding period data point.
     */
    node?: v1FundingPeriodDataPoint;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1FundingPeriod } from './v1FundingPeriod';

/**
 * Funding period data with the corresponding cursor.
 */
export type v2FundingPeriodEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Funding period data.
     */
    node?: v1FundingPeriod;
};


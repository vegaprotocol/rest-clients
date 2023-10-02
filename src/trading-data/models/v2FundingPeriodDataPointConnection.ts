/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2FundingPeriodDataPointEdge } from './v2FundingPeriodDataPointEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of funding period data points and corresponding page information.
 */
export type v2FundingPeriodDataPointConnection = {
    /**
     * Page of funding period data points and their corresponding cursors.
     */
    edges?: Array<v2FundingPeriodDataPointEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2FundingPeriodEdge } from './v2FundingPeriodEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of funding period data and corresponding page information.
 */
export type v2FundingPeriodConnection = {
    /**
     * Page of funding period data and their corresponding cursors.
     */
    edges?: Array<v2FundingPeriodEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


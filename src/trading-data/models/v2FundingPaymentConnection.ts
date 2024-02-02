/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2FundingPaymentEdge } from './v2FundingPaymentEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of funding payment data and corresponding page information.
 */
export type v2FundingPaymentConnection = {
    /**
     * Page of funding payment data and their corresponding cursors.
     */
    edges?: Array<v2FundingPaymentEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


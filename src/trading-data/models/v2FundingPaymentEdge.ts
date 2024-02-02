/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { apiv2FundingPayment } from './apiv2FundingPayment';

/**
 * Funding payment data with the corresponding cursor.
 */
export type v2FundingPaymentEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Funding payment data.
     */
    node?: apiv2FundingPayment;
};


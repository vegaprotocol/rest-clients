/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eventsv1FundingPayment } from './eventsv1FundingPayment';

/**
 * Event notifying of funding payments at the end of a funding period.
 */
export type v1FundingPayments = {
    /**
     * ID of the market.
     */
    marketId?: string;
    /**
     * List of parties and the payment amounts, this can be negative for parties who lost at the end of the funding period.
     */
    payments?: Array<eventsv1FundingPayment>;
    /**
     * Sequence number of the funding period associated with these payments.
     */
    seq?: string;
};


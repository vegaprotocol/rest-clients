/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type apiv2FundingPayment = {
    /**
     * Funding payment amount, where a positive value indicates an earned payment received and a negative value a loss.
     */
    amount?: string;
    /**
     * Funding period sequence this payment was calculated from.
     */
    fundingPeriodSeq?: string;
    /**
     * Market that produced the funding payment.
     */
    marketId?: string;
    /**
     * Party that received the funding payment.
     */
    partyId?: string;
    /**
     * Timestamp, in Unix nanoseconds, at which this funding payment occured.
     */
    timestamp?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The amount gained or lost by a party as a result of a funding payment.
 */
export type eventsv1FundingPayment = {
    /**
     * The amount paid, this can be negative for parties who lost at the end of the funding period.
     */
    amount?: string;
    /**
     * ID of the party.
     */
    partyId?: string;
};


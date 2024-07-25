/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1TransferFees = {
    /**
     * Amount of fees paid.
     */
    amount?: string;
    /**
     * Amount that was subtracted from the transfer fee based on available discounts.
     */
    discountApplied?: string;
    /**
     * Epoch when the transfer was dispatched, and fees were paid.
     */
    epoch?: string;
    /**
     * Transfer that triggered the collection of fees.
     */
    transferId?: string;
};


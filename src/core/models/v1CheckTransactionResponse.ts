/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1CheckTransactionResponse = {
    /**
     * Unused.
     */
    info?: string;
    /**
     * Error code to indicate the category of failure if the transaction was not successfully checked.
     */
    code?: number;
    /**
     * Further details for why the transaction was not successfully submitted.
     */
    data?: string;
    /**
     * Unused.
     */
    gasUsed?: string;
    /**
     * Amount of space in a block that the transaction will fill. This does not relate to any monetary cost for submitting the transaction.
     */
    gasWanted?: string;
    /**
     * Further details for the underlying consensus layer of the result of the transaction.
     */
    log?: string;
    /**
     * Whether or not the transaction passed the submission checks.
     */
    success?: boolean;
};


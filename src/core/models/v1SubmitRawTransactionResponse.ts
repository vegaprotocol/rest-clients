/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1SubmitRawTransactionResponse = {
    /**
     * Error code to indicate the category of failure if the transaction was not successfully submitted.
     */
    code?: number;
    /**
     * Further details for why the transaction was not successfully submitted.
     */
    data?: string;
    /**
     * Unused.
     */
    height?: string;
    /**
     * Further details for the underlying consensus layer of the result of the transaction.
     */
    log?: string;
    /**
     * Whether or not the transaction was validated and submitted to the chain's mempool.
     */
    success?: boolean;
    /**
     * Hash of the transaction, which can be used to identify the transaction in a node's event stream.
     */
    txHash?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Blockchain transaction type.
 *
 * - TYPE_ASYNC: Transaction will be submitted without waiting for a response.
 * - TYPE_SYNC: Transaction will be submitted, and blocking until the mempool returns a response.
 * - TYPE_COMMIT: Transaction will be submitted, and blocking until the network has committed it into a block.
 * Used only for debugging local network, not for submitting transactions.
 */
export enum v1SubmitTransactionRequestType {
    TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
    TYPE_ASYNC = 'TYPE_ASYNC',
    TYPE_SYNC = 'TYPE_SYNC',
    TYPE_COMMIT = 'TYPE_COMMIT',
}

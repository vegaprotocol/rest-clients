/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - TYPE_ASYNC: Transaction will be submitted without waiting for response
 * - TYPE_SYNC: Transaction will be submitted, and blocking until the
 * tendermint mempool returns a response
 * - TYPE_COMMIT: Transaction will be submitted, and blocking until the tendermint
 * network has committed it into a block. Used only for debugging,
 * not for submitting transactions
 */
export enum v1SubmitTransactionRequestType {
    TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
    TYPE_ASYNC = 'TYPE_ASYNC',
    TYPE_SYNC = 'TYPE_SYNC',
    TYPE_COMMIT = 'TYPE_COMMIT',
}

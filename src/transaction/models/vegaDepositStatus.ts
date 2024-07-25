/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - STATUS_UNSPECIFIED: Default value, always invalid
 * - STATUS_OPEN: Deposit is being processed by the network
 * - STATUS_CANCELLED: Deposit has been cancelled or failed to be verified by the network
 * - STATUS_FINALIZED: Deposit has been finalised and accounts have been updated
 * - STATUS_DUPLICATE_REJECTED: Deposit has been rejected as a duplicate transaction.
 */
export enum vegaDepositStatus {
    STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED',
    STATUS_OPEN = 'STATUS_OPEN',
    STATUS_CANCELLED = 'STATUS_CANCELLED',
    STATUS_FINALIZED = 'STATUS_FINALIZED',
    STATUS_DUPLICATE_REJECTED = 'STATUS_DUPLICATE_REJECTED',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - STATUS_UNSPECIFIED: Default value, always invalid
 * - STATUS_OPEN: Withdrawal is open and being processed by the network
 * - STATUS_REJECTED: Withdrawal have been cancelled
 * - STATUS_FINALIZED: Withdrawal went through and is fully finalised, the funds are removed from the
 * Vega network and are unlocked on the foreign chain bridge, for example, on the Ethereum network
 */
export enum vegaWithdrawalStatus {
    STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED',
    STATUS_OPEN = 'STATUS_OPEN',
    STATUS_REJECTED = 'STATUS_REJECTED',
    STATUS_FINALIZED = 'STATUS_FINALIZED',
}

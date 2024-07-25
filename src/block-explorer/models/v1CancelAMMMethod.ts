/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - METHOD_IMMEDIATE: Cancellation will be immediate and any open positions will be transferred to the network for liquidation.
 * - METHOD_REDUCE_ONLY: AMM will only trade to reduce its position, and will be cancelled once its position reaches zero.
 */
export enum v1CancelAMMMethod {
    METHOD_UNSPECIFIED = 'METHOD_UNSPECIFIED',
    METHOD_IMMEDIATE = 'METHOD_IMMEDIATE',
    METHOD_REDUCE_ONLY = 'METHOD_REDUCE_ONLY',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - EXPIRY_STRATEGY_UNSPECIFIED: Never valid
 * - EXPIRY_STRATEGY_CANCELS: Stop order should be cancelled if the expiry time is reached.
 * - EXPIRY_STRATEGY_SUBMIT: Order should be submitted if the expiry time is reached.
 */
export enum StopOrderExpiryStrategy {
    EXPIRY_STRATEGY_UNSPECIFIED = 'EXPIRY_STRATEGY_UNSPECIFIED',
    EXPIRY_STRATEGY_CANCELS = 'EXPIRY_STRATEGY_CANCELS',
    EXPIRY_STRATEGY_SUBMIT = 'EXPIRY_STRATEGY_SUBMIT',
}

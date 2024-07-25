/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - STATUS_ACTIVE: AMM is active on the market and is posting tradable volume.
 * - STATUS_REJECTED: AMM submission was rejected.
 * - STATUS_CANCELLED: AMM has been cancelled by the owner and is no longer trading.
 * - STATUS_STOPPED: AMM has been stopped by the network and is no longer trading.
 * - STATUS_REDUCE_ONLY: AMM will only trade such that it will reduce its position.
 */
export enum v1AMMStatus {
    STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED',
    STATUS_ACTIVE = 'STATUS_ACTIVE',
    STATUS_REJECTED = 'STATUS_REJECTED',
    STATUS_CANCELLED = 'STATUS_CANCELLED',
    STATUS_STOPPED = 'STATUS_STOPPED',
    STATUS_REDUCE_ONLY = 'STATUS_REDUCE_ONLY',
}

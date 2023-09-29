/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Status of a liquidity provision order.
 *
 * - STATUS_UNSPECIFIED: Always invalid
 * - STATUS_ACTIVE: Liquidity provision is active
 * - STATUS_STOPPED: Liquidity provision was stopped by the network
 * - STATUS_CANCELLED: Liquidity provision was cancelled by the liquidity provider
 * - STATUS_REJECTED: Liquidity provision was invalid and got rejected
 * - STATUS_UNDEPLOYED: Liquidity provision is valid and accepted by network, but orders aren't deployed
 * - STATUS_PENDING: Liquidity provision is valid and accepted by network
 * but has never been deployed. If when it's possible to deploy the orders for the first time
 * margin check fails, then they will be cancelled without any penalties.
 */
export enum vegaLiquidityProvisionStatus {
    STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED',
    STATUS_ACTIVE = 'STATUS_ACTIVE',
    STATUS_STOPPED = 'STATUS_STOPPED',
    STATUS_CANCELLED = 'STATUS_CANCELLED',
    STATUS_REJECTED = 'STATUS_REJECTED',
    STATUS_UNDEPLOYED = 'STATUS_UNDEPLOYED',
    STATUS_PENDING = 'STATUS_PENDING',
}

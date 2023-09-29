/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - STATUS_UNSPECIFIED: Default value, always invalid
 * - STATUS_ACTIVE: Used for active unfilled or partially filled orders
 * - STATUS_EXPIRED: Used for expired GTT orders
 * - STATUS_CANCELLED: Used for orders cancelled by the party that created the order
 * - STATUS_STOPPED: Used for unfilled FOK or IOC orders, and for orders that were stopped by the network
 * - STATUS_FILLED: Used for closed fully filled orders
 * - STATUS_REJECTED: Used for orders when not enough collateral was available to fill the margin requirements
 * - STATUS_PARTIALLY_FILLED: Used for closed partially filled IOC orders
 * - STATUS_PARKED: Order has been removed from the order book and has been parked,
 * this applies to pegged orders and liquidity orders (orders created from a liquidity provision shape)
 */
export enum vegaOrderStatus {
    STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED',
    STATUS_ACTIVE = 'STATUS_ACTIVE',
    STATUS_EXPIRED = 'STATUS_EXPIRED',
    STATUS_CANCELLED = 'STATUS_CANCELLED',
    STATUS_STOPPED = 'STATUS_STOPPED',
    STATUS_FILLED = 'STATUS_FILLED',
    STATUS_REJECTED = 'STATUS_REJECTED',
    STATUS_PARTIALLY_FILLED = 'STATUS_PARTIALLY_FILLED',
    STATUS_PARKED = 'STATUS_PARKED',
}

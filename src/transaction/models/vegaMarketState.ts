/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - STATE_UNSPECIFIED: Default value, invalid
 * - STATE_PROPOSED: Governance proposal valid and accepted
 * - STATE_REJECTED: Outcome of governance votes is to reject the market
 * - STATE_PENDING: Governance vote passes/wins
 * - STATE_CANCELLED: Market triggers cancellation condition or governance
 * votes to close before market becomes Active
 * - STATE_ACTIVE: Enactment date reached and usual auction exit checks pass
 * - STATE_SUSPENDED: Price monitoring or liquidity monitoring trigger
 * - STATE_CLOSED: Governance vote to close (Not currently implemented)
 * - STATE_TRADING_TERMINATED: Defined by the product (i.e. from a product parameter,
 * specified in market definition, giving close date/time)
 * - STATE_SETTLED: Settlement triggered and completed as defined by product
 * - STATE_SUSPENDED_VIA_GOVERNANCE: Market has been suspended via governance
 */
export enum vegaMarketState {
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED',
    STATE_PROPOSED = 'STATE_PROPOSED',
    STATE_REJECTED = 'STATE_REJECTED',
    STATE_PENDING = 'STATE_PENDING',
    STATE_CANCELLED = 'STATE_CANCELLED',
    STATE_ACTIVE = 'STATE_ACTIVE',
    STATE_SUSPENDED = 'STATE_SUSPENDED',
    STATE_CLOSED = 'STATE_CLOSED',
    STATE_TRADING_TERMINATED = 'STATE_TRADING_TERMINATED',
    STATE_SETTLED = 'STATE_SETTLED',
    STATE_SUSPENDED_VIA_GOVERNANCE = 'STATE_SUSPENDED_VIA_GOVERNANCE',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - STATUS_REASON_CANCELLED_BY_PARTY: AMM was cancelled by its owner.
 * - STATUS_REASON_CANNOT_FILL_COMMITMENT: Party does not have enough funds in their general account to meet the AMM's commitment.
 * - STATUS_REASON_PARTY_ALREADY_OWNS_AMM_FOR_MARKET: Party already has an AMM operating on this market and cannot create another one.
 * - STATUS_REASON_PARTY_CLOSED_OUT: AMM was liquidated and stopped by the network.
 * - STATUS_REASON_MARKET_CLOSED: AMM was stopped by the network because the market it operated in was closed.
 * - STATUS_REASON_COMMITMENT_TOO_LOW: Commitment amount was below the network wide minimum, or its price bounds are too wide, such that the volume is spread thinly creating zero-volume price-levels.
 * - STATUS_REASON_CANNOT_REBASE: AMM was unable to rebase its fair-price such that it does not cross with existing orders.
 */
export enum AMMStatusReason {
    STATUS_REASON_UNSPECIFIED = 'STATUS_REASON_UNSPECIFIED',
    STATUS_REASON_CANCELLED_BY_PARTY = 'STATUS_REASON_CANCELLED_BY_PARTY',
    STATUS_REASON_CANNOT_FILL_COMMITMENT = 'STATUS_REASON_CANNOT_FILL_COMMITMENT',
    STATUS_REASON_PARTY_ALREADY_OWNS_AMM_FOR_MARKET = 'STATUS_REASON_PARTY_ALREADY_OWNS_AMM_FOR_MARKET',
    STATUS_REASON_PARTY_CLOSED_OUT = 'STATUS_REASON_PARTY_CLOSED_OUT',
    STATUS_REASON_MARKET_CLOSED = 'STATUS_REASON_MARKET_CLOSED',
    STATUS_REASON_COMMITMENT_TOO_LOW = 'STATUS_REASON_COMMITMENT_TOO_LOW',
    STATUS_REASON_CANNOT_REBASE = 'STATUS_REASON_CANNOT_REBASE',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - METHOD_MARGINAL_COST: Fee is the smallest value of all bids, such that liquidity providers with nominated fees less than or equal to this value still have sufficient commitment to fulfil the market's target stake.
 * - METHOD_WEIGHTED_AVERAGE: Fee is the weighted average of all liquidity providers' nominated fees, weighted by their committment.
 * - METHOD_CONSTANT: Fee is set by the market to a constant value irrespective of any liquidity provider's nominated fee.
 */
export enum vegaLiquidityFeeSettingsMethod {
    METHOD_UNSPECIFIED = 'METHOD_UNSPECIFIED',
    METHOD_MARGINAL_COST = 'METHOD_MARGINAL_COST',
    METHOD_WEIGHTED_AVERAGE = 'METHOD_WEIGHTED_AVERAGE',
    METHOD_CONSTANT = 'METHOD_CONSTANT',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Liquidation strategy used when the network holds a position resulting from position resolution.
 */
export type vegaLiquidationStrategy = {
    /**
     * Fraction of the open position the market will try to close in a single attempt; range 0 through 1.
     */
    disposalFraction?: string;
    /**
     * Interval, in seconds, at which the network will attempt to close its position.
     */
    disposalTimeStep?: string;
    /**
     * Size of the position that the network will try to close in a single attempt.
     */
    fullDisposalSize?: string;
    /**
     * Max fraction of the total volume of the orderbook, within liquidity bounds, that the network can use to close its position; range 0 through 1.
     */
    maxFractionConsumed?: string;
};


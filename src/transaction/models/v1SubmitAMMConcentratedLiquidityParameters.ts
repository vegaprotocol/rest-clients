/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Liquidity parameters that define the size and range of the AMM's tradeable volume.
 */
export type v1SubmitAMMConcentratedLiquidityParameters = {
    /**
     * Price that the AMM will quote as its "fair price" when its position is zero.
     */
    base?: string;
    /**
     * Leverage at lower bound. If not set the markets risk-factors will be used to calculate leverage.
     */
    leverageAtLowerBound?: string;
    /**
     * Leverage at upper bound. If not set the markets risk-factors will be used to calculate leverage.
     */
    leverageAtUpperBound?: string;
    /**
     * Price at which the AMM will stop quoting buy volume. If not supplied the AMM will never hold a long position.
     */
    lowerBound?: string;
    /**
     * Price at which the AMM will stop quoting sell volume. If not supplied the AMM will never hold a short position.
     */
    upperBound?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Liquidity parameters that define the range and shape of the AMM's curve.
 */
export type v1AMMConcentratedLiquidityParameters = {
    /**
     * Base price bound configuration for the AMM.
     */
    base?: string;
    /**
     * Leverage at lower bounds.
     */
    leverageAtLowerBound?: string;
    /**
     * Leverage at upper bounds.
     */
    leverageAtUpperBound?: string;
    /**
     * Upper price bound configuration for the AMM. If unset, the AMM will never hold a short position.
     */
    lowerBound?: string;
    /**
     * Lower price bound configuration for the AMM. If unset, the AMM will never hold a long position.
     */
    upperBound?: string;
};


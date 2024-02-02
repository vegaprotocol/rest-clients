/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaFeeFactors } from './vegaFeeFactors';
import type { vegaLiquidityFeeSettings } from './vegaLiquidityFeeSettings';

export type vegaFees = {
    /**
     * Fee factors.
     */
    factors?: vegaFeeFactors;
    /**
     * Liquidity fee settings for the market describing how the fee was calculated.
     */
    liquidityFeeSettings?: vegaLiquidityFeeSettings;
};


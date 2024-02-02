/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityFeeSettingsMethod } from './vegaLiquidityFeeSettingsMethod';

/**
 * Market settings that describe how the liquidity fee is calculated.
 */
export type vegaLiquidityFeeSettings = {
    /**
     * Constant liquidity fee used when using the constant fee method.
     */
    feeConstant?: string;
    /**
     * Method used to calculate the market's liquidity fee.
     */
    method?: vegaLiquidityFeeSettingsMethod;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2LiquidationPrice } from './v2LiquidationPrice';

/**
 * Liquidation estimate for both worst and best case possible.
 */
export type v2LiquidationEstimate = {
    /**
     * Liquidation price estimate assuming no slippage.
     */
    bestCase?: v2LiquidationPrice;
    /**
     * Liquidation price estimate assuming slippage cap is applied.
     */
    worstCase?: v2LiquidationPrice;
};


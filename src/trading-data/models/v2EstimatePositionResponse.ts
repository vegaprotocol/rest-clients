/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2CollateralIncreaseEstimate } from './v2CollateralIncreaseEstimate';
import type { v2LiquidationEstimate } from './v2LiquidationEstimate';
import type { v2MarginEstimate } from './v2MarginEstimate';

/**
 * Response for the estimated margin level, margin account balance change, and liquidation price for the specified position.
 */
export type v2EstimatePositionResponse = {
    /**
     * Estimated margin account balance increase.
     */
    collateralIncreaseEstimate?: v2CollateralIncreaseEstimate;
    /**
     * Liquidation price range estimate for the specified position. Only populated if available collateral was specified in the request.
     */
    liquidation?: v2LiquidationEstimate;
    /**
     * Margin level range estimate for the specified position.
     */
    margin?: v2MarginEstimate;
};


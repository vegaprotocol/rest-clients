/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarginLevels } from './vegaMarginLevels';

/**
 * Margin level estimate for both worst and best case possible.
 */
export type v2MarginEstimate = {
    /**
     * Margin level estimate assuming no slippage.
     */
    bestCase?: vegaMarginLevels;
    /**
     * Margin level estimate assuming slippage cap is applied.
     */
    worstCase?: vegaMarginLevels;
};


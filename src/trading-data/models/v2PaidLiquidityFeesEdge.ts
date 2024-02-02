/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PaidLiquidityFeesStats } from './v1PaidLiquidityFeesStats';

/**
 * Paid liquidity fees data with the corresponding cursor.
 */
export type v2PaidLiquidityFeesEdge = {
    /**
     * Cursor that can be used to fetch further data.
     */
    cursor?: string;
    /**
     * Paid liquidity fees data returned by the API.
     */
    node?: v1PaidLiquidityFeesStats;
};


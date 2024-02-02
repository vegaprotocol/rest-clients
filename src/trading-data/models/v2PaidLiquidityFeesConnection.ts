/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2PaidLiquidityFeesEdge } from './v2PaidLiquidityFeesEdge';

/**
 * Paid liquidity fees data and corresponding page information.
 */
export type v2PaidLiquidityFeesConnection = {
    /**
     * Page of paid liquidity fees data.
     */
    edges?: Array<v2PaidLiquidityFeesEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


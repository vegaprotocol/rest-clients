/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityOrder } from './vegaLiquidityOrder';

export type vegaLiquidityOrderReference = {
    /**
     * Liquidity order from the original submission.
     */
    liquidityOrder?: vegaLiquidityOrder;
    /**
     * Unique ID of the pegged order generated to fulfil this liquidity order.
     */
    orderId?: string;
};


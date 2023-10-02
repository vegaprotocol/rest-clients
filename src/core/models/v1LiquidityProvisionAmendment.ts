/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityOrder } from './vegaLiquidityOrder';

export type v1LiquidityProvisionAmendment = {
    buys?: Array<vegaLiquidityOrder>;
    /**
     * From here at least one of the following is required to consider the command valid.
     */
    commitmentAmount?: string;
    fee?: string;
    /**
     * Unique ID for the market with the liquidity provision to be amended.
     */
    marketId?: string;
    reference?: string;
    sells?: Array<vegaLiquidityOrder>;
};


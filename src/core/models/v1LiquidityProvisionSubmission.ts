/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityOrder } from './vegaLiquidityOrder';

export type v1LiquidityProvisionSubmission = {
    /**
     * Set of liquidity buy orders to meet the liquidity provision obligation.
     */
    buys?: Array<vegaLiquidityOrder>;
    /**
     * Specified as a unitless number that represents the amount of settlement asset of the market.
     * This field is an unsigned integer scaled using the asset's decimal places.
     */
    commitmentAmount?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per setting fees and rewarding liquidity providers.
     */
    fee?: string;
    /**
     * Market ID for the order.
     */
    marketId?: string;
    /**
     * Reference to be added to every order created out of this liquidity provision submission.
     */
    reference?: string;
    /**
     * Set of liquidity sell orders to meet the liquidity provision obligation.
     */
    sells?: Array<vegaLiquidityOrder>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityOrderReference } from './vegaLiquidityOrderReference';
import type { vegaLiquidityProvisionStatus } from './vegaLiquidityProvisionStatus';

export type vegaLiquidityProvision = {
    /**
     * Set of liquidity buy orders to meet the liquidity provision obligation.
     */
    buys?: Array<vegaLiquidityOrderReference>;
    /**
     * Specified as a unitless number that represents the amount of settlement asset of the market.
     * This field is an unsigned integer scaled to the asset's decimal places.
     */
    commitmentAmount?: string;
    /**
     * Timestamp in Unix nanoseconds for when the liquidity provision was created.
     */
    createdAt?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per setting fees and rewarding liquidity providers.
     */
    fee?: string;
    /**
     * Unique ID for the liquidity provision.
     */
    id?: string;
    /**
     * Market ID for the liquidity provision.
     */
    marketId?: string;
    /**
     * Unique party ID for the creator of the provision.
     */
    partyId?: string;
    /**
     * Reference shared between this liquidity provision and all its orders.
     */
    reference?: string;
    /**
     * Set of liquidity sell orders to meet the liquidity provision obligation.
     */
    sells?: Array<vegaLiquidityOrderReference>;
    /**
     * Status of this liquidity provision.
     */
    status?: vegaLiquidityProvisionStatus;
    /**
     * Timestamp in Unix nanoseconds for when the liquidity provision was updated.
     */
    updatedAt?: string;
    /**
     * Version of this liquidity provision.
     */
    version?: string;
};


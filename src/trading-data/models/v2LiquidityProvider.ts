/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityProviderFeeShare } from './vegaLiquidityProviderFeeShare';
import type { vegaLiquidityProviderSLA } from './vegaLiquidityProviderSLA';

/**
 * Liquidity provider information.
 */
export type v2LiquidityProvider = {
    /**
     * Information used for calculating an LP's fee share, such as the equity like share,
     * average entry valuation and liquidity score for the liquidity provider for the specified market.
     */
    feeShare?: vegaLiquidityProviderFeeShare;
    /**
     * ID of the market the liquidity provider is active in.
     */
    marketId?: string;
    /**
     * Party ID of the liquidity provider.
     */
    partyId?: string;
    /**
     * Information about LP's SLA performance.
     */
    sla?: vegaLiquidityProviderSLA;
};


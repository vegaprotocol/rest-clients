/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2MarketFees } from './v2MarketFees';

export type v2GetPartyDiscountStatsResponse = {
    /**
     * The fees and rebate per market, with and without the discounts applied.
     */
    partyMarketFees?: Array<v2MarketFees>;
    /**
     * The Tier number indicating the current referral discount program.
     */
    referralDiscountTier?: string;
    /**
     * The tier number for the volume discount program the party is in.
     */
    volumeDiscountTier?: string;
    /**
     * The tier number for referencing the current volume rebate tier.
     */
    volumeRebateTier?: string;
};


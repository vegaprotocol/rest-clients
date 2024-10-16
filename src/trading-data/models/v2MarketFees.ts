/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2MarketFees = {
    /**
     * Maker rebate without rewards.
     */
    baseMakerRebate?: string;
    /**
     * The taker fees the party will have to pay, discounts applied.
     */
    discountedTakerFee?: string;
    /**
     * The market ID.
     */
    marketId?: string;
    /**
     * Undiscounted fees to be paid on the market.
     */
    undiscountedTakerFee?: string;
    /**
     * Maker rebate with the party rewards included.
     */
    userMakerRebate?: string;
};


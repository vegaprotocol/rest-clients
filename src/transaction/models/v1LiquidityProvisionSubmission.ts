/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A command that indicates to the network the party's intention to supply liquidity to the given market and become a liquidity provider.
 * An active liquidity provider for a market will earn fees based on the trades that occur in the market.
 */
export type v1LiquidityProvisionSubmission = {
    /**
     * Amount that the submitter will commit as liquidity to the market, specified as a unitless number in the settlement asset of the market.
     * This field is an unsigned integer scaled using the asset's decimal places.
     */
    commitmentAmount?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per setting fees and rewarding liquidity providers.
     */
    fee?: string;
    /**
     * Market that the submitter wishes to provide liquidity for.
     */
    marketId?: string;
    /**
     * Arbitrary reference to be added to every order created out of this liquidity provision submission.
     */
    reference?: string;
};


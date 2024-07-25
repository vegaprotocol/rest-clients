/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaLiquidityProviderSLA = {
    /**
     * Indicates how often LP meets the commitment during the current epoch.
     */
    currentEpochFractionOfTimeOnBook?: string;
    /**
     * Determines how the fee penalties from past epochs affect future fee revenue.
     */
    hysteresisPeriodFeePenalties?: Array<string>;
    /**
     * Shows the bond penalties from past epochs.
     */
    lastEpochBondPenalty?: string;
    /**
     * Indicates the fee penalty amount applied in the previous epoch.
     */
    lastEpochFeePenalty?: string;
    /**
     * Indicates how often LP met the commitment in the previous epoch.
     */
    lastEpochFractionOfTimeOnBook?: string;
    /**
     * Notional volume of orders within the range provided on the buy side of the book.
     */
    notionalVolumeBuys?: string;
    /**
     * Notional volume of orders within the range provided on the sell side of the book.
     */
    notionalVolumeSells?: string;
    /**
     * Liquidity provider party ID.
     */
    party?: string;
    /**
     * Represents the total amount of funds LP must supply. The amount to be supplied is in the market’s
     * settlement currency, spread on both buy and sell sides of the order book within a defined range.
     */
    requiredLiquidity?: string;
};


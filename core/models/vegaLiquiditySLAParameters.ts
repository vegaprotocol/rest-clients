/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaLiquiditySLAParameters = {
    /**
     * Specifies the minimum fraction of time LPs must spend "on the book" providing their committed liquidity.
     */
    commitmentMinTimeFraction?: string;
    /**
     * Specifies the number of liquidity epochs over which past performance will continue to affect rewards.
     */
    performanceHysteresisEpochs?: string;
    priceRange?: string;
    /**
     * Specifies the maximum fraction of their accrued fees an LP that meets the SLA implied by market.liquidity.commitmentMinTimeFraction will lose to liquidity providers
     * that achieved a higher SLA performance than them.
     */
    slaCompetitionFactor?: string;
};


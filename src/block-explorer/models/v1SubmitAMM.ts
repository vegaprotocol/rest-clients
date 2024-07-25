/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1SubmitAMMConcentratedLiquidityParameters } from './v1SubmitAMMConcentratedLiquidityParameters';

/**
 * Command to create an automated market maker for a given market.
 */
export type v1SubmitAMM = {
    /**
     * Amount to be committed to the AMM.
     */
    commitmentAmount?: string;
    /**
     * Concentrated liquidity parameters defining the shape of the AMM's volume curves.
     */
    concentratedLiquidityParameters?: v1SubmitAMMConcentratedLiquidityParameters;
    /**
     * Market ID for which to create an AMM.
     */
    marketId?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market.
     */
    proposedFee?: string;
    slippageTolerance?: string;
};


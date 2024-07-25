/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1AmendAMMConcentratedLiquidityParameters } from './v1AmendAMMConcentratedLiquidityParameters';

/**
 * Command to amend an existing automated market maker on a market.
 */
export type v1AmendAMM = {
    /**
     * Amount to be committed to the AMM. If not supplied the commitment will remain unchanged.
     */
    commitmentAmount?: string;
    /**
     * Concentrated liquidity parameters defining the shape of the AMM's volume curves. If not supplied the parameters will remain unchanged.
     */
    concentratedLiquidityParameters?: v1AmendAMMConcentratedLiquidityParameters;
    /**
     * Market ID for the AMM to be amended.
     */
    marketId?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market. If not supplied the proposed fee will remain unchanged.
     */
    proposedFee?: string;
    /**
     * Slippage tolerance for rebasing position when updating the AMM.
     */
    slippageTolerance?: string;
};


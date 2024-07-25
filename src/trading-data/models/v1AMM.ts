/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AMMStatusReason } from './AMMStatusReason';
import type { v1AMMConcentratedLiquidityParameters } from './v1AMMConcentratedLiquidityParameters';
import type { v1AMMStatus } from './v1AMMStatus';

export type v1AMM = {
    /**
     * Liquidity parameters that define the size and range of the AMM's tradeable volume.
     */
    parameters?: v1AMMConcentratedLiquidityParameters;
    /**
     * Party ID that the AMM operates as.
     */
    ammPartyId?: string;
    /**
     * Amount committed to the AMM.
     */
    commitment?: string;
    /**
     * ID of the AMM.
     */
    id?: string;
    /**
     * Market ID that the AMM provides liquidity for.
     */
    marketId?: string;
    /**
     * Party ID of the owner of the AMM.
     */
    partyId?: string;
    /**
     * Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market.
     */
    proposedFee?: string;
    /**
     * Current status of the AMM.
     */
    status?: v1AMMStatus;
    /**
     * Reason for the AMM's current status.
     */
    statusReason?: AMMStatusReason;
};


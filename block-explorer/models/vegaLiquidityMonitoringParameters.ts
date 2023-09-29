/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaTargetStakeParameters } from './vegaTargetStakeParameters';

export type vegaLiquidityMonitoringParameters = {
    /**
     * Specifies by how many seconds an auction should be extended if leaving the auction were to trigger a liquidity auction.
     */
    auctionExtension?: string;
    /**
     * Specifies parameters related to target stake calculation.
     */
    targetStakeParameters?: vegaTargetStakeParameters;
    /**
     * Specifies the triggering ratio for entering liquidity auction.
     */
    triggeringRatio?: string;
};


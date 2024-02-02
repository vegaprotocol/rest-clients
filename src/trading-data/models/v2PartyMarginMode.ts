/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarginMode } from './vegaMarginMode';

/**
 * Margin mode selected for the given party and market.
 */
export type v2PartyMarginMode = {
    /**
     * Epoch at which the update happened.
     */
    atEpoch?: string;
    /**
     * Margin factor for the market. Isolated mode only.
     */
    marginFactor?: string;
    /**
     * Selected margin mode.
     */
    marginMode?: vegaMarginMode;
    /**
     * Unique ID of the market.
     */
    marketId?: string;
    /**
     * Maximum theoretical leverage for the market. Isolated mode only.
     */
    maxTheoreticalLeverage?: string;
    /**
     * Minimum theoretical margin factor for the market. Isolated mode only.
     */
    minTheoreticalMarginFactor?: string;
    /**
     * Unique ID of the party.
     */
    partyId?: string;
};


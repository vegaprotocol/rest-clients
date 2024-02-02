/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarginMode } from './vegaMarginMode';

export type v1PartyMarginModeUpdated = {
    /**
     * Epoch at which the update happened.
     */
    atEpoch?: string;
    /**
     * Margin factor for the market. Isolated mode only.
     */
    marginFactor?: string;
    /**
     * Updated margin mode.
     */
    marginMode?: vegaMarginMode;
    /**
     * Unique ID of the market in which the update happened.
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
     * Unique ID of the party that updated their margin mode.
     */
    partyId?: string;
};


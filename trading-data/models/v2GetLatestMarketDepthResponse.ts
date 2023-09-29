/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPriceLevel } from './vegaPriceLevel';
import type { vegaTrade } from './vegaTrade';

export type v2GetLatestMarketDepthResponse = {
    /**
     * Zero or more price levels for the buy side of the market depth data.
     */
    buy?: Array<vegaPriceLevel>;
    /**
     * Last trade recorded on Vega.
     */
    lastTrade?: vegaTrade;
    /**
     * Market ID of the depth levels returned.
     */
    marketId?: string;
    /**
     * Zero or more price levels for the sell side of the market depth data.
     */
    sell?: Array<vegaPriceLevel>;
    /**
     * Sequence number incremented after each update.
     */
    sequenceNumber?: string;
};


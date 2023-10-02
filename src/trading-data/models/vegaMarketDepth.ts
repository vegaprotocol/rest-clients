/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPriceLevel } from './vegaPriceLevel';

export type vegaMarketDepth = {
    /**
     * Collection of price levels for the buy side of the book.
     */
    buy?: Array<vegaPriceLevel>;
    /**
     * Market ID for which the depth levels apply.
     */
    marketId?: string;
    /**
     * Collection of price levels for the sell side of the book.
     */
    sell?: Array<vegaPriceLevel>;
    /**
     * Sequence number for the market depth data returned.
     */
    sequenceNumber?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPriceLevel } from './vegaPriceLevel';

export type vegaMarketDepthUpdate = {
    /**
     * Collection of updated price levels for the buy side of the book.
     */
    buy?: Array<vegaPriceLevel>;
    /**
     * Market ID for which the market depth updates are for.
     */
    marketId?: string;
    /**
     * Sequence number of the previous market depth update, for checking there are no gaps.
     */
    previousSequenceNumber?: string;
    /**
     * Collection of updated price levels for the sell side of the book.
     */
    sell?: Array<vegaPriceLevel>;
    /**
     * Sequence number for the market depth update data returned. It is increasing but not monotonic.
     */
    sequenceNumber?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarket } from './vegaMarket';

/**
 * Market information with the corresponding cursor.
 */
export type v2MarketEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Information about the market.
     */
    node?: vegaMarket;
};


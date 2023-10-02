/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarketDepth } from './vegaMarketDepth';

/**
 * Response that is received for MarketDepth subscription.
 */
export type v2ObserveMarketsDepthResponse = {
    /**
     * List of market depth data.
     */
    marketDepth?: Array<vegaMarketDepth>;
};


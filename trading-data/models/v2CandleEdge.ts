/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { apiv2Candle } from './apiv2Candle';

/**
 * Candle data with the corresponding cursor.
 */
export type v2CandleEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Candlestick data, i.e. high, low, open, and closing prices for an interval of trading.
     */
    node?: apiv2Candle;
};


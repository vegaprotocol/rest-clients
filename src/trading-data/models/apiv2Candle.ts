/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type apiv2Candle = {
    /**
     * Closing trade price.
     */
    close?: string;
    /**
     * Highest price for trading during the candle interval.
     */
    high?: string;
    /**
     * Timestamp in Unix nanoseconds for the point in time when the candle was last updated.
     */
    lastUpdate?: string;
    /**
     * Lowest price for trading during the candle interval.
     */
    low?: string;
    /**
     * Total notional value traded during the candle interval. This value is determined by multiplying price, using market decimal places, by size, using position decimal places.
     * The number of decimal places needed to convert this value to a decimal is market decimal places plus position decimal places.
     */
    notional?: string;
    /**
     * Open trade price.
     */
    open?: string;
    /**
     * Timestamp in Unix nanoseconds for the point in time when the candle was initially created/opened.
     */
    start?: string;
    /**
     * Total trading volume during the candle interval.
     */
    volume?: string;
};


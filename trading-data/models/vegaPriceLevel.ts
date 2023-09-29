/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaPriceLevel = {
    /**
     * Number of orders at the price level.
     */
    numberOfOrders?: string;
    /**
     * Price for the price level, the price is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places. This field
     * is an unsigned integer passed as a string and needs to be scaled using the market's decimal places.
     */
    price?: string;
    /**
     * Volume at the price level.
     */
    volume?: string;
};


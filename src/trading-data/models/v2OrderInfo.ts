/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaSide } from './vegaSide';

/**
 * Basic description of an order.
 */
export type v2OrderInfo = {
    /**
     * Boolean that indicates if it is a market order.
     */
    isMarketOrder?: boolean;
    /**
     * Price for the order. The price is an unsigned integer. For example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    price?: string;
    /**
     * Size remaining.
     */
    remaining?: string;
    /**
     * Side for the order, e.g. buy or sell.
     */
    side?: vegaSide;
};


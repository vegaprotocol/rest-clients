/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { v1IcebergOpts } from './v1IcebergOpts';
import type { vegaOrderType } from './vegaOrderType';
import type { vegaPeggedOrder } from './vegaPeggedOrder';
import type { vegaSide } from './vegaSide';

/**
 * A command that submits an order to the Vega network for a given market.
 */
export type v1OrderSubmission = {
    /**
     * Timestamp, in Unix nanoseconds, for when the order will expire. Can only be set when the order's time-in-force is GTT.
     */
    expiresAt?: string;
    /**
     * Iceberg order details. If set, the order will exist on the order book in chunks.
     */
    icebergOpts?: v1IcebergOpts;
    /**
     * Market ID to submit the order to.
     */
    marketId?: string;
    /**
     * Pegged order details. If set, the order's price will be offset from a particular reference price of the order book at all times.
     */
    peggedOrder?: vegaPeggedOrder;
    /**
     * If set, the order will only be executed if it would not trade on entry to the order book. Only valid for limit orders.
     */
    postOnly?: boolean;
    /**
     * Price for the order, the price is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places,
     * required field for limit orders, however it is not required for market orders.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    price?: string;
    /**
     * If set, the order will only be executed if the outcome of the trade moves the trader's position closer to 0.
     * Only valid for non-persistent orders.
     */
    reduceOnly?: boolean;
    /**
     * Arbitrary optional reference for the order, to be used as a human-readable non-unique identifier for the order.
     */
    reference?: string;
    /**
     * Which side of the order book the order is for, e.g. buy or sell.
     */
    side?: vegaSide;
    /**
     * Size for the order, for example, in a futures market the size equals the number of units.
     */
    size?: string;
    /**
     * Time in force indicates how long an order will remain active before it is executed or expires..
     */
    timeInForce?: OrderTimeInForce;
    /**
     * Type of the order.
     */
    type?: vegaOrderType;
};


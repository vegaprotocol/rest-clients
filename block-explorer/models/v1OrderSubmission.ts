/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { v1IcebergOpts } from './v1IcebergOpts';
import type { vegaOrderType } from './vegaOrderType';
import type { vegaPeggedOrder } from './vegaPeggedOrder';
import type { vegaSide } from './vegaSide';

export type v1OrderSubmission = {
    /**
     * Timestamp in Unix nanoseconds for when the order will expire,
     * required field only for `Order.TimeInForce`.TIME_IN_FORCE_GTT`.
     */
    expiresAt?: string;
    /**
     * Parameters used to specify an iceberg order.
     */
    icebergOpts?: v1IcebergOpts;
    /**
     * Market ID for the order, required field.
     */
    marketId?: string;
    /**
     * Used to specify the details for a pegged order.
     */
    peggedOrder?: vegaPeggedOrder;
    /**
     * Only valid for Limit orders. Cannot be True at the same time as Reduce-Only.
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
     * Only valid for Non-Persistent orders. Cannot be True at the same time as Post-Only.
     * If set, order will only be executed if the outcome of the trade moves the trader's position closer to 0.
     */
    reduceOnly?: boolean;
    /**
     * Reference given for the order, this is typically used to retrieve an order submitted through consensus, currently
     * set internally by the node to return a unique reference ID for the order submission.
     */
    reference?: string;
    /**
     * Side for the order, e.g. SIDE_BUY or SIDE_SELL, required field.
     */
    side?: vegaSide;
    /**
     * Size for the order, for example, in a futures market the size equals the number of units, cannot be negative.
     */
    size?: string;
    /**
     * Time in force indicates how long an order will remain active before it is executed or expires, required field.
     */
    timeInForce?: OrderTimeInForce;
    /**
     * Type for the order, required field - See `Order.Type`.
     */
    type?: vegaOrderType;
};


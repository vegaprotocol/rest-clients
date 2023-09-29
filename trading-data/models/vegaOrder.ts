/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { vegaIcebergOrder } from './vegaIcebergOrder';
import type { vegaOrderError } from './vegaOrderError';
import type { vegaOrderStatus } from './vegaOrderStatus';
import type { vegaOrderType } from './vegaOrderType';
import type { vegaPeggedOrder } from './vegaPeggedOrder';
import type { vegaSide } from './vegaSide';

export type vegaOrder = {
    /**
     * Batch ID for the order, used internally for orders submitted during auctions
     * to keep track of the auction batch this order falls under. Required for fees calculation.
     */
    batchId?: string;
    /**
     * Timestamp for when the order was created at, in nanoseconds.
     */
    createdAt?: string;
    /**
     * Timestamp in Unix nanoseconds for when the order will expire.
     */
    expiresAt?: string;
    icebergOrder?: vegaIcebergOrder;
    /**
     * Unique ID generated for the order.
     */
    id?: string;
    /**
     * Set if the order was created as part of a liquidity provision, will be empty if not.
     */
    liquidityProvisionId?: string;
    /**
     * Market ID for the order.
     */
    marketId?: string;
    /**
     * Party ID for the order.
     */
    partyId?: string;
    /**
     * Pegged order details, used only if the order represents a pegged order.
     */
    peggedOrder?: vegaPeggedOrder;
    /**
     * Only valid for Limit orders. Cannot be True at the same time as Reduce-Only.
     */
    postOnly?: boolean;
    /**
     * Price for the order, the price is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    price?: string;
    /**
     * Futher details for why an order with status `STATUS_REJECTED` was rejected.
     */
    reason?: vegaOrderError;
    /**
     * Only valid for Non-Persistent orders. Cannot be True at the same time as Post-Only.
     * If set, order will only be executed if the outcome of the trade moves the trader's position closer to 0.
     */
    reduceOnly?: boolean;
    /**
     * Reference given for the order.
     */
    reference?: string;
    /**
     * Size remaining, when this reaches 0 then the order is fully filled and status becomes STATUS_FILLED.
     */
    remaining?: string;
    /**
     * Side for the order, e.g. SIDE_BUY or SIDE_SELL.
     */
    side?: vegaSide;
    /**
     * Size for the order, for example, in a futures market the size equals the number of contracts.
     */
    size?: string;
    /**
     * Current status of the order.
     */
    status?: vegaOrderStatus;
    timeInForce?: OrderTimeInForce;
    /**
     * Type for the order.
     */
    type?: vegaOrderType;
    /**
     * Timestamp in Unix nanoseconds for when the order was last updated.
     */
    updatedAt?: string;
    /**
     * Version for the order, initial value is version 1 and is incremented after each successful amend.
     */
    version?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { vegaPeggedReference } from './vegaPeggedReference';

/**
 * A command that allows a party to update the details of an existing order.
 * Any field that is left unset or as a default value indicates that this field on the original order will be left unchanged.
 * It is not possible to change an order's type through this command.
 */
export type v1OrderAmendment = {
    /**
     * Timestamp, in Unix nanoseconds, for the new expiry time for the order.
     */
    expiresAt?: string;
    /**
     * Market ID that the order was originally submitted to.
     */
    marketId?: string;
    /**
     * ID of the order to amend.
     */
    orderId?: string;
    /**
     * New pegged offset for the order.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    peggedOffset?: string;
    /**
     * New pegged reference for the order.
     */
    peggedReference?: vegaPeggedReference;
    /**
     * New price for the order. This field is an unsigned integer scaled to the market's decimal places.
     */
    price?: string;
    /**
     * New size for the order.
     * Amending the size causes the size and remaining part of the order to be changed by the difference between the original and amended size.
     * - Specifying a size smaller than the current size leaves the order at its current order book position.
     * - Specifying a size larger than the current size removes and reinserts the order at the back of the price level.
     * - Specifying a size that results in the remaining part of the order being reduced to zero cancels the order.
     * This field is an unsigned integer scaled to the market's decimal places.
     * If specified, size_delta must be set to 0.
     */
    size?: string;
    /**
     * Amend the size for the order by the delta specified:
     * - To reduce the size from the current value set a negative integer value
     * - To increase the size from the current value, set a positive integer value
     * - To leave the size unchanged set a value of zero
     * This field needs to be scaled using the market's position decimal places.
     * If specified, size must not be set.
     */
    sizeDelta?: string;
    /**
     * New time in force for the order.
     */
    timeInForce?: OrderTimeInForce;
};


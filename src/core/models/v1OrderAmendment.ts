/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { vegaPeggedReference } from './vegaPeggedReference';

export type v1OrderAmendment = {
    /**
     * Amend the expiry time for the order, if the Timestamp value is set, otherwise expiry time will remain unchanged.
     */
    expiresAt?: string;
    /**
     * Market ID, this is required to find the order and will not be updated.
     */
    marketId?: string;
    /**
     * Order ID, this is required to find the order and will not be updated, required field.
     */
    orderId?: string;
    /**
     * Amend the pegged order offset for the order. This field is an unsigned integer scaled to the market's decimal places.
     */
    peggedOffset?: string;
    /**
     * Amend the pegged order reference for the order.
     */
    peggedReference?: vegaPeggedReference;
    /**
     * Amend the price for the order if the price value is set, otherwise price will remain unchanged.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    price?: string;
    /**
     * Amend the size for the order by the delta specified:
     * - To reduce the size from the current value set a negative integer value
     * - To increase the size from the current value, set a positive integer value
     * - To leave the size unchanged set a value of zero
     * This field needs to be scaled using the market's position decimal places.
     */
    sizeDelta?: string;
    /**
     * Amend the time in force for the order, set to TIME_IN_FORCE_UNSPECIFIED to remain unchanged.
     */
    timeInForce?: OrderTimeInForce;
};


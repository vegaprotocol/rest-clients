/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StopOrderExpiryStrategy } from './StopOrderExpiryStrategy';
import type { StopOrderSizeOverrideSetting } from './StopOrderSizeOverrideSetting';
import type { StopOrderSizeOverrideValue } from './StopOrderSizeOverrideValue';
import type { v1OrderSubmission } from './v1OrderSubmission';

/**
 * Price and expiry configuration for a stop order.
 */
export type v1StopOrderSetup = {
    /**
     * Timestamp, in Unix nanoseconds, for when the stop order should expire. If not set the stop order will not expire.
     */
    expiresAt?: string;
    /**
     * Strategy to adopt if the expiry time is reached.
     */
    expiryStrategy?: StopOrderExpiryStrategy;
    /**
     * Order to be submitted once the trigger is breached.
     */
    orderSubmission?: v1OrderSubmission;
    /**
     * Order will be submitted if the last traded price on the market breaches the given price.
     */
    price?: string;
    sizeOverrideSetting?: StopOrderSizeOverrideSetting;
    sizeOverrideValue?: StopOrderSizeOverrideValue;
    /**
     * Order will be submitted if the last traded price has moved the given percent from the highest/lowest mark price since the stop order was submitted.
     */
    trailingPercentOffset?: string;
};


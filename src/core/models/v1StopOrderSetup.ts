/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StopOrderExpiryStrategy } from './StopOrderExpiryStrategy';
import type { v1OrderSubmission } from './v1OrderSubmission';

export type v1StopOrderSetup = {
    /**
     * Optional expiry timestamp.
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
     * Fixed price at which the order will be submitted.
     */
    price?: string;
    /**
     * Trailing percentage at which the order will be submitted.
     */
    trailingPercentOffset?: string;
};


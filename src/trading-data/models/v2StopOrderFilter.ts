/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StopOrderExpiryStrategy } from './StopOrderExpiryStrategy';
import type { v2DateRange } from './v2DateRange';
import type { vegaStopOrderStatus } from './vegaStopOrderStatus';

/**
 * Stop order filter that contains all filtering conditions and values that are applied to the stop orders listing.
 */
export type v2StopOrderFilter = {
    /**
     * Restrict orders to those placed during the given date range. If not set, all orders will be returned.
     */
    dateRange?: v2DateRange;
    /**
     * Restrict orders to those with the given expiry strategies.
     */
    expiryStrategies?: Array<StopOrderExpiryStrategy>;
    liveOnly?: boolean;
    /**
     * Restrict orders to those placed on the given market IDs.
     */
    marketIds?: Array<string>;
    /**
     * Restrict orders to those placed by the given party IDs.
     */
    partyIds?: Array<string>;
    /**
     * Restrict orders to those with the given statuses.
     */
    statuses?: Array<vegaStopOrderStatus>;
};


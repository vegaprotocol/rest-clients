/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTimeInForce } from './OrderTimeInForce';
import type { v2DateRange } from './v2DateRange';
import type { vegaOrderStatus } from './vegaOrderStatus';
import type { vegaOrderType } from './vegaOrderType';

export type v2OrderFilter = {
    /**
     * Restrict orders to those placed during the given date range. If not set, all orders will be returned.
     */
    dateRange?: v2DateRange;
    /**
     * Indicator if liquidity provisions should be included or not in the list.
     */
    excludeLiquidity?: boolean;
    /**
     * Restrict orders to those that are live. If not set, it is treated as being false.
     */
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
     * Restrict orders to those with the given reference.
     */
    reference?: string;
    /**
     * Restrict orders to those with the given statuses.
     */
    statuses?: Array<vegaOrderStatus>;
    /**
     * Restrict orders to those with the given Time In Force.
     */
    timeInForces?: Array<OrderTimeInForce>;
    /**
     * Restrict orders to those with the given types.
     */
    types?: Array<vegaOrderType>;
};


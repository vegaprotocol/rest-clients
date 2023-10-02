/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2StopOrderConnection } from './v2StopOrderConnection';

/**
 * Response that is received from the query to list stop orders.
 */
export type v2ListStopOrdersResponse = {
    /**
     * Page of stop orders data and corresponding page information.
     */
    orders?: v2StopOrderConnection;
};


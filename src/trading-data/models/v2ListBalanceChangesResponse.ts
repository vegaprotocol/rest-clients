/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AggregatedBalanceConnection } from './v2AggregatedBalanceConnection';

/**
 * Response that is received from querying balances changes.
 */
export type v2ListBalanceChangesResponse = {
    /**
     * Page of aggregated balances data and corresponding page information.
     */
    balances?: v2AggregatedBalanceConnection;
};


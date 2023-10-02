/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AggregatedBalance } from './v2AggregatedBalance';

/**
 * Aggregated balance data with the corresponding cursor.
 */
export type v2AggregatedBalanceEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Balance of the set of requested accounts.
     */
    node?: v2AggregatedBalance;
};


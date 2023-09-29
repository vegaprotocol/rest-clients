/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AggregatedLedgerEntriesEdge } from './v2AggregatedLedgerEntriesEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of aggregated ledger entries data and corresponding page information.
 */
export type v2AggregatedLedgerEntriesConnection = {
    /**
     * Page of 'AggregatedLedgerEntry' data and their corresponding cursors.
     */
    edges?: Array<v2AggregatedLedgerEntriesEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


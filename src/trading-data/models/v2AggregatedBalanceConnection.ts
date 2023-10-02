/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AggregatedBalanceEdge } from './v2AggregatedBalanceEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2AggregatedBalanceConnection = {
    /**
     * Page of aggregated balance data and their corresponding cursors.
     */
    edges?: Array<v2AggregatedBalanceEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2MarketDataEdge } from './v2MarketDataEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2MarketDataConnection = {
    /**
     * Page of market data items and their corresponding cursors.
     */
    edges?: Array<v2MarketDataEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


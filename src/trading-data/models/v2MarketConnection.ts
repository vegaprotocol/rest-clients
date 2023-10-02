/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2MarketEdge } from './v2MarketEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of markets and corresponding page information.
 */
export type v2MarketConnection = {
    /**
     * Page of markets and their corresponding cursors.
     */
    edges?: Array<v2MarketEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


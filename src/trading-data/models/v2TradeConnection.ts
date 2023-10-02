/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TradeEdge } from './v2TradeEdge';

export type v2TradeConnection = {
    /**
     * Page of trades and their corresponding cursors.
     */
    edges?: Array<v2TradeEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


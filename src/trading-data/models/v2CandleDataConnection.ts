/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2CandleEdge } from './v2CandleEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2CandleDataConnection = {
    /**
     * Page of candle data items and their corresponding cursors.
     */
    edges?: Array<v2CandleEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


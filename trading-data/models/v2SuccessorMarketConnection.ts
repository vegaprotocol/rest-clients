/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2SuccessorMarketEdge } from './v2SuccessorMarketEdge';

/**
 * Page of successor market records and corresponding page information.
 */
export type v2SuccessorMarketConnection = {
    /**
     * Page of successor markets and their cursors.
     */
    edges?: Array<v2SuccessorMarketEdge>;
    /**
     * Page information for pagination control.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2StopOrderEdge } from './v2StopOrderEdge';

/**
 * Page of stop orders data and corresponding page information.
 */
export type v2StopOrderConnection = {
    /**
     * Page of stop orders and their corresponding cursors.
     */
    edges?: Array<v2StopOrderEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


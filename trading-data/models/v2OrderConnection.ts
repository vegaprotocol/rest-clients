/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2OrderEdge } from './v2OrderEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of orders data and corresponding page information.
 */
export type v2OrderConnection = {
    /**
     * Page of orders and their corresponding cursors.
     */
    edges?: Array<v2OrderEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


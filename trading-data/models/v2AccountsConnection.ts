/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AccountEdge } from './v2AccountEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of accounts data and corresponding page information.
 */
export type v2AccountsConnection = {
    /**
     * Page of accounts data and their corresponding cursors.
     */
    edges?: Array<v2AccountEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


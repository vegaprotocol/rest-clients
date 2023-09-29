/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2OracleDataEdge } from './v2OracleDataEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of oracle data and corresponding page information.
 */
export type v2OracleDataConnection = {
    /**
     * Page of oracle data and their corresponding cursors.
     */
    edges?: Array<v2OracleDataEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


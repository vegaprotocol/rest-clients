/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2OracleSpecEdge } from './v2OracleSpecEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2OracleSpecsConnection = {
    /**
     * Page of oracle specs data and their corresponding cursors.
     */
    edges?: Array<v2OracleSpecEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


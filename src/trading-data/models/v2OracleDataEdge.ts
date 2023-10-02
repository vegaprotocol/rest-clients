/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaOracleData } from './vegaOracleData';

/**
 * Oracle data item with the corresponding cursor.
 */
export type v2OracleDataEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data that was received from an external oracle.
     */
    node?: vegaOracleData;
};


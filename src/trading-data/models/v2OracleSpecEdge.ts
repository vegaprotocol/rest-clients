/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaOracleSpec } from './vegaOracleSpec';

/**
 * Oracle specs data item with the corresponding cursor.
 */
export type v2OracleSpecEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * External spec data that satisfies the list request.
     */
    node?: vegaOracleSpec;
};


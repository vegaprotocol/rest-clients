/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaNode } from './vegaNode';

/**
 * Node data with the corresponding cursor.
 */
export type v2NodeEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data specific to a single node on the Vega network.
     */
    node?: vegaNode;
};


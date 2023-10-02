/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaNetworkParameter } from './vegaNetworkParameter';

/**
 * Network parameter with the corresponding cursor.
 */
export type v2NetworkParameterEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Name and associated value of a network parameter.
     */
    node?: vegaNetworkParameter;
};


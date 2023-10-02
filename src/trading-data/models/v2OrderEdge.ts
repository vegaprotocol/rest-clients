/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaOrder } from './vegaOrder';

/**
 * Order data with the corresponding cursor.
 */
export type v2OrderEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with an order submitted to a Vega node.
     */
    node?: vegaOrder;
};


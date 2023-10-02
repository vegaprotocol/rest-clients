/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1StopOrderEvent } from './v1StopOrderEvent';

/**
 * Order data with the corresponding cursor.
 */
export type v2StopOrderEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with an order submitted to a Vega node.
     */
    node?: v1StopOrderEvent;
};


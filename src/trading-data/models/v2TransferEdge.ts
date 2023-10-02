/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaeventsv1Transfer } from './vegaeventsv1Transfer';

/**
 * Transfers data with the corresponding cursor.
 */
export type v2TransferEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data relating to a transfer that has been made.
     */
    node?: vegaeventsv1Transfer;
};


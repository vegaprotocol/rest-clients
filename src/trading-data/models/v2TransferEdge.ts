/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TransferNode } from './v2TransferNode';

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
    node?: v2TransferNode;
};


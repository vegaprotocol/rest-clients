/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1KeyRotation } from './v1KeyRotation';

/**
 * Key rotation data with the corresponding cursor.
 */
export type v2KeyRotationEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data relating to a key rotation that was performed by a node on the Vega network.
     */
    node?: v1KeyRotation;
};


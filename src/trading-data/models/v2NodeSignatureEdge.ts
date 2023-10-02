/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeSignature } from './v1NodeSignature';

/**
 * Nodes signature edge with the corresponding cursor.
 */
export type v2NodeSignatureEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Node signature data.
     */
    node?: v1NodeSignature;
};


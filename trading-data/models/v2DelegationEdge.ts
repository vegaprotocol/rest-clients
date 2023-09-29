/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDelegation } from './vegaDelegation';

/**
 * Delegation data with the corresponding cursor.
 */
export type v2DelegationEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * How much a party is delegating to a node and when.
     */
    node?: vegaDelegation;
};


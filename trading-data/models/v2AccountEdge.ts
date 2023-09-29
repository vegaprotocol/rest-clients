/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AccountBalance } from './v2AccountBalance';

/**
 * Account data item with the corresponding cursor.
 */
export type v2AccountEdge = {
    /**
     * Cursor that can be used to fetch further pages with reference to this account.
     */
    cursor?: string;
    /**
     * Account balance data.
     */
    node?: v2AccountBalance;
};


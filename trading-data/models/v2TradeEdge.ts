/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaTrade } from './vegaTrade';

/**
 * Trade data item with the corresponding cursor..
 */
export type v2TradeEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a trade that has been executed.
     */
    node?: vegaTrade;
};


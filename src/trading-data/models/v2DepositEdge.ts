/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDeposit } from './vegaDeposit';

/**
 * Deposits data with the corresponding cursor.
 */
export type v2DepositEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a single deposit made on the Vega network.
     */
    node?: vegaDeposit;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaWithdrawal } from './vegaWithdrawal';

/**
 * Withdrawals data with the corresponding cursor.
 */
export type v2WithdrawalEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a single withdrawal made from the Vega network.
     */
    node?: vegaWithdrawal;
};


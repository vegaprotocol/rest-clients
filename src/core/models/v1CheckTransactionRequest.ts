/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Transaction } from './v1Transaction';

export type v1CheckTransactionRequest = {
    /**
     * Transaction containing a command to be checked on the network, and not added to the chain's mempool.
     */
    tx?: v1Transaction;
};


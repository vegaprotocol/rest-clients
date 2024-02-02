/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1SubmitTransactionRequestType } from './v1SubmitTransactionRequestType';
import type { v1Transaction } from './v1Transaction';

export type v1SubmitTransactionRequest = {
    /**
     * Transaction containing a command to execute on the network, and a signature to provide authentication.
     */
    tx?: v1Transaction;
    /**
     * Method of submission.
     */
    type?: v1SubmitTransactionRequestType;
};


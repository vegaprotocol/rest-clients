/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionResultKeyErrors } from './TransactionResultKeyErrors';

export type TransactionResultFailureDetails = {
    error?: string;
    /**
     * Map of the detailed errors, if any.
     */
    errors?: Array<TransactionResultKeyErrors>;
};


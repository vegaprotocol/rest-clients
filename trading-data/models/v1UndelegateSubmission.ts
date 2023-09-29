/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UndelegateSubmissionMethod } from './UndelegateSubmissionMethod';

export type v1UndelegateSubmission = {
    /**
     * Optional, if not specified = ALL.
     * If provided, this field must be an unsigned integer passed as a string
     * and needs to be scaled using the asset decimal places for the token.
     */
    amount?: string;
    /**
     * Method of delegation.
     */
    method?: UndelegateSubmissionMethod;
    /**
     * Node ID to delegate to.
     */
    nodeId?: string;
};


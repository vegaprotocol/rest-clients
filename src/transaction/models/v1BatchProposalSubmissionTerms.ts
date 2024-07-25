/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBatchProposalTermsChange } from './vegaBatchProposalTermsChange';

export type v1BatchProposalSubmissionTerms = {
    /**
     * List of individual changes included in the batch proposal.
     */
    changes?: Array<vegaBatchProposalTermsChange>;
    /**
     * Closing timestamp in Unix time; adheres to `minClose` and `maxClose` limits.
     */
    closingTimestamp?: string;
};


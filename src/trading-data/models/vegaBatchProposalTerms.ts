/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBatchProposalTermsChange } from './vegaBatchProposalTermsChange';
import type { vegaProposalParameters } from './vegaProposalParameters';

export type vegaBatchProposalTerms = {
    /**
     * List of individual changes included in the batch proposal.
     */
    changes?: Array<vegaBatchProposalTermsChange>;
    /**
     * Closing timestamp in Unix time; adheres to `minClose` and `maxClose` limits.
     */
    closingTimestamp?: string;
    /**
     * Specific parameters defining the proposal's characteristics used for validation.
     */
    proposalParams?: vegaProposalParameters;
};


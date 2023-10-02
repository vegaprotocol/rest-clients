/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaProposalRationale } from './vegaProposalRationale';
import type { vegaProposalTerms } from './vegaProposalTerms';

export type v1ProposalSubmission = {
    /**
     * Rationale behind a proposal.
     */
    rationale?: vegaProposalRationale;
    /**
     * Reference identifying the proposal.
     */
    reference?: string;
    /**
     * Proposal configuration and the actual change that is meant to be executed when proposal is enacted.
     */
    terms?: vegaProposalTerms;
};


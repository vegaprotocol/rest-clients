/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaProposalRationale } from './vegaProposalRationale';
import type { vegaProposalTerms } from './vegaProposalTerms';

/**
 * Command that allows a token holder to submit a governance proposal that can be voted on by any other token holders, and eventually enacted on the Vega network.
 * For example this command can be used to propose a new market.
 */
export type v1ProposalSubmission = {
    /**
     * Rationale behind a proposal.
     */
    rationale?: vegaProposalRationale;
    /**
     * Arbitrary human-readable reference identifying the proposal.
     */
    reference?: string;
    /**
     * Proposal terms containing the type and details of the proposal, as well as time spans for voting and enactment.
     */
    terms?: vegaProposalTerms;
};


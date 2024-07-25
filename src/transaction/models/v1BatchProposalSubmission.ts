/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1BatchProposalSubmissionTerms } from './v1BatchProposalSubmissionTerms';
import type { vegaProposalRationale } from './vegaProposalRationale';

/**
 * Command that allows a token holder to submit a batch governance proposal that can be voted on by any other token holders, and eventually enacted on the Vega network.
 * For example this command can be used to propose a new market and a network parameter change with it.
 */
export type v1BatchProposalSubmission = {
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
    terms?: v1BatchProposalSubmissionTerms;
};


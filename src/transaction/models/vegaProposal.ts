/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBatchProposalTerms } from './vegaBatchProposalTerms';
import type { vegaProposalError } from './vegaProposalError';
import type { vegaProposalRationale } from './vegaProposalRationale';
import type { vegaProposalState } from './vegaProposalState';
import type { vegaProposalTerms } from './vegaProposalTerms';

export type vegaProposal = {
    /**
     * ID of a batch proposal that this proposal is part of.
     */
    batchId?: string;
    /**
     * Batch proposal terms.
     */
    batchTerms?: vegaBatchProposalTerms;
    /**
     * Detailed error associated to the reason.
     */
    errorDetails?: string;
    /**
     * Unique proposal ID.
     */
    id?: string;
    /**
     * Party ID i.e. public key of the party submitting the proposal.
     */
    partyId?: string;
    /**
     * Rationale behind a proposal.
     */
    rationale?: vegaProposalRationale;
    /**
     * Reason for the current state of the proposal, this may be set in case of REJECTED and FAILED statuses.
     */
    reason?: vegaProposalError;
    /**
     * Proposal reference.
     */
    reference?: string;
    /**
     * Required majority from liquidity providers, optional but is required for market update proposal.
     */
    requiredLiquidityProviderMajority?: string;
    /**
     * Required participation from liquidity providers, optional but is required for market update proposal.
     */
    requiredLiquidityProviderParticipation?: string;
    /**
     * Required majority for this proposal.
     */
    requiredMajority?: string;
    /**
     * Required vote participation for this proposal.
     */
    requiredParticipation?: string;
    /**
     * Current state of the proposal, i.e. open, passed, failed etc.
     */
    state?: vegaProposalState;
    /**
     * Proposal configuration and the actual change that is meant to be executed when proposal is enacted.
     * Single proposal term.
     */
    terms?: vegaProposalTerms;
    /**
     * Proposal timestamp for date and time as Unix time in nanoseconds when proposal was submitted to the network.
     */
    timestamp?: string;
};


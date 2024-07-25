/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVoteValue } from './vegaVoteValue';

/**
 * Command that allows a token holder to vote for or against an active governance proposal.
 */
export type v1VoteSubmission = {
    /**
     * Submit vote for the specified proposal ID.
     */
    proposalId?: string;
    /**
     * Actual value of the vote.
     */
    value?: vegaVoteValue;
};


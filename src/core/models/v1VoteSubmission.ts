/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVoteValue } from './vegaVoteValue';

/**
 * Command to submit a new vote for a governance proposal.
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


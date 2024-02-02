/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVoteValue } from './vegaVoteValue';

export type vegaVote = {
    /**
     * Voter's party ID.
     */
    partyId?: string;
    /**
     * The per market weight of the vote compared to the total amount of equity-like share on the market.. It is only populated if the vote is for a batch type proposal.
     */
    perMarketEquityLikeShareWeight?: Record<string, string>;
    /**
     * Proposal ID being voted on.
     */
    proposalId?: string;
    /**
     * Timestamp in Unix nanoseconds when the vote was acknowledged by the network.
     */
    timestamp?: string;
    /**
     * The weight of the vote compared to the total amount of equity-like share on the market. It is only populated if the vote is for a single type proposal.
     */
    totalEquityLikeShareWeight?: string;
    /**
     * Total number of governance token for the party that cast the vote.
     */
    totalGovernanceTokenBalance?: string;
    /**
     * The weight of this vote based on the total number of governance tokens.
     */
    totalGovernanceTokenWeight?: string;
    /**
     * Which way the party voted.
     */
    value?: vegaVoteValue;
};


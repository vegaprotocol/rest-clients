/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaGovernanceDataType } from './vegaGovernanceDataType';
import type { vegaProposal } from './vegaProposal';
import type { vegaVote } from './vegaVote';

export type vegaGovernanceData = {
    /**
     * All NO votes against the proposal above.
     */
    no?: Array<vegaVote>;
    /**
     * All latest NO votes by party which is guaranteed to be unique,
     * where key (string) is the party ID i.e. public key and
     * value (Vote) is the vote cast by the given party.
     */
    noParty?: Record<string, vegaVote>;
    /**
     * Governance proposal that is being voted on.
     */
    proposal?: vegaProposal;
    /**
     * Type of proposal this data is for.
     */
    proposalType?: vegaGovernanceDataType;
    /**
     * If proposal type is batch, proposals will contain all the proposals that are make up the batch.
     */
    proposals?: Array<vegaProposal>;
    /**
     * All YES votes in favour of the proposal above.
     */
    yes?: Array<vegaVote>;
    /**
     * All latest YES votes by party which is guaranteed to be unique,
     * where key (string) is the party ID i.e. public key and
     * value (Vote) is the vote cast by the given party.
     */
    yesParty?: Record<string, vegaVote>;
};


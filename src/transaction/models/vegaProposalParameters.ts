/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaProposalParameters = {
    /**
     * Represents the maximum time that a proposal can be open for voting.
     */
    maxClose?: string;
    /**
     * Represents the maximum time before an enacted proposal must take effect.
     */
    maxEnact?: string;
    /**
     * Represents the minimum time before a proposal can be closed for voting.
     */
    minClose?: string;
    /**
     * Represents the minimum time before an enacted proposal takes effect.
     */
    minEnact?: string;
    /**
     * Specifies the minimum share that is akin to equity, which a participant must hold for their vote to be eligible.
     */
    minEquityLikeShare?: string;
    /**
     * Specifies the minimum governance token balance a proposer must hold to initiate a proposal.
     */
    minProposerBalance?: string;
    /**
     * Specifies the minimum governance token balance a voter must hold to participate in voting.
     */
    minVoterBalance?: string;
    /**
     * Specifies the required percentage of votes a proposal needs to be approved.
     */
    requiredMajority?: string;
    /**
     * Specifies the required majority percentage from liquidity providers for a proposal to be approved.
     */
    requiredMajorityLp?: string;
    /**
     * Specifies the required percentage of eligible participants that must partake in the proposal for it to be valid.
     */
    requiredParticipation?: string;
    /**
     * Specifies the required percentage of participation from liquidity providers for the proposal to be valid.
     */
    requiredParticipationLp?: string;
};


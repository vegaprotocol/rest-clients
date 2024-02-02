/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GetPartyVestingStatsResponse = {
    /**
     * Epoch for which this information is valid.
     */
    epochSeq?: string;
    /**
     * Party ID.
     */
    partyId?: string;
    /**
     * The balance of the party, in quantum.
     */
    quantumBalance?: string;
    /**
     * Reward bonus multiplier.
     */
    rewardBonusMultiplier?: string;
};


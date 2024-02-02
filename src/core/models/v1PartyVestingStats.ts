/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The vesting stats for a given party.
 */
export type v1PartyVestingStats = {
    /**
     * The party.
     */
    partyId?: string;
    /**
     * The balance of the party, in quantum.
     */
    quantumBalance?: string;
    /**
     * The bonus multiplier applied on the reward.
     */
    rewardBonusMultiplier?: string;
};


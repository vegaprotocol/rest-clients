/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1PartyActivityStreak = {
    /**
     * How many epoch this party has been active for.
     */
    activeFor?: string;
    /**
     * The epoch this information is relevant to.
     */
    epoch?: string;
    /**
     * how many epoch this party has been inactive for.
     */
    inactiveFor?: string;
    /**
     * Is this party considered active or not.
     */
    isActive?: boolean;
    openVolume?: string;
    /**
     * The party.
     */
    party?: string;
    /**
     * The current rewards distribution multiplier for this party.
     */
    rewardDistributionActivityMultiplier?: string;
    /**
     * The vesting multiplier for this party.
     */
    rewardVestingActivityMultiplier?: string;
    tradedVolume?: string;
};


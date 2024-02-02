/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Referral set statistics for a given epoch for a party.
 */
export type v2ReferralSetStats = {
    /**
     * Epoch at which the set's statistics were updated.
     */
    atEpoch?: string;
    /**
     * Discount factor applied to the party.
     */
    discountFactor?: string;
    /**
     * Current referee notional taker volume.
     */
    epochNotionalTakerVolume?: string;
    /**
     * Party ID.
     */
    partyId?: string;
    /**
     * Running volume for the set based on the window length of the current
     * referral program.
     */
    referralSetRunningNotionalTakerVolume?: string;
    referrerTakerVolume?: string;
    /**
     * Reward factor applied to the party.
     */
    rewardFactor?: string;
    /**
     * Proportion of the referee's taker fees to be rewarded to the referrer.
     */
    rewardsFactorMultiplier?: string;
    /**
     * Multiplier applied to the referral reward factor when calculating referral rewards due to the referrer.
     */
    rewardsMultiplier?: string;
    /**
     * Indicates if the referral set was eligible to be part of the referral program.
     */
    wasEligible?: boolean;
};


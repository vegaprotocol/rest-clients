/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1RefereeStats } from './v1RefereeStats';
import type { vegaRewardFactors } from './vegaRewardFactors';

export type v1ReferralSetStatsUpdated = {
    /**
     * Epoch at which the set's statistics are updated.
     */
    atEpoch?: string;
    /**
     * Referees' statistics for that epoch.
     */
    refereesStats?: Array<v1RefereeStats>;
    /**
     * Running volume for the set based on the window length of the current
     * referral program.
     */
    referralSetRunningNotionalTakerVolume?: string;
    referrerTakerVolume?: string;
    rewardFactor?: string;
    /**
     * Reward factor applied to the trades.
     */
    rewardFactors?: vegaRewardFactors;
    /**
     * Reward factors multiplier for the trades.
     */
    rewardFactorsMultiplier?: vegaRewardFactors;
    rewardsFactorMultiplier?: string;
    /**
     * Rewards multiplier applied to the trades.
     */
    rewardsMultiplier?: string;
    /**
     * Unique ID of the set.
     */
    setId?: string;
    /**
     * Indicates if the referral set was eligible to be part of the referral program.
     */
    wasEligible?: boolean;
};


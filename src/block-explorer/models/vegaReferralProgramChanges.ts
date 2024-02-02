/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBenefitTier } from './vegaBenefitTier';
import type { vegaStakingTier } from './vegaStakingTier';

export type vegaReferralProgramChanges = {
    /**
     * Defined benefit tiers in increasing order. First element will give Tier 1,
     * second element will give Tier 2, and so on. Determines the level of
     * benefit a party can expect based on performance criteria.
     */
    benefitTiers?: Array<vegaBenefitTier>;
    /**
     * Timestamp as Unix time in seconds, after which when the current epoch
     * ends, the program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Defined staking tiers in increasing order. First element will give Tier 1,
     * second element will give Tier 2, and so on. Determines the level of
     * benefit a party can expect based on their staking.
     */
    stakingTiers?: Array<vegaStakingTier>;
    /**
     * Number of epochs over which to evaluate a referral set's running volume.
     */
    windowLength?: string;
};


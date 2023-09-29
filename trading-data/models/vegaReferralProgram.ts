/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBenefitTier } from './vegaBenefitTier';
import type { vegaStakingTier } from './vegaStakingTier';

export type vegaReferralProgram = {
    /**
     * Defined benefit tiers in increasing order. First element will give Tier 1,
     * second element will give Tier 2, and so on. Determines the level of
     * benefit a party can expect based on performance criteria.
     */
    benefitTiers?: Array<vegaBenefitTier>;
    /**
     * Timestamp as Unix time in seconds, after which when the current epoch ends, the
     * programs status will become STATE_CLOSED and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Unique ID generated from the proposal that created this program.
     */
    id?: string;
    /**
     * Defined staking tiers in increasing order. First element will give Tier 1,
     * second element will give Tier 2, and so on. Determines the level of
     * benefit a party can expect based on their staking.
     */
    stakingTiers?: Array<vegaStakingTier>;
    /**
     * Incremental version of the program. It is incremented after each program
     * update.
     */
    version?: string;
    /**
     * Number of epochs over which to evaluate a referral set's running volume.
     */
    windowLength?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBenefitTier } from './vegaBenefitTier';
import type { vegaStakingTier } from './vegaStakingTier';

/**
 * Referral program details.
 */
export type apiv2ReferralProgram = {
    /**
     * Defined tiers in increasing order. First element will give Tier 1, second
     * element will give Tier 2, and so on.
     */
    benefitTiers?: Array<vegaBenefitTier>;
    /**
     * Timestamp in Unix nanoseconds, after which when the current epoch ends, the
     * program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Timestamp, in Unix nanoseconds, when the program ended.
     */
    endedAt?: string;
    /**
     * Unique ID generated from the proposal that created this program.
     */
    id?: string;
    /**
     * Defined benefit tiers ordered by increasing reward multiplier. Determines the level of
     * benefit a party can expect based on their staking.
     */
    stakingTiers?: Array<vegaStakingTier>;
    /**
     * Incremental version of the program. It is incremented after each program
     * update.
     */
    version?: string;
    /**
     * Number of epochs over which the referral set's running volume is evaluated.
     */
    windowLength?: string;
};


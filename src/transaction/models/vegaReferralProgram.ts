/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBenefitTier } from './vegaBenefitTier';
import type { vegaStakingTier } from './vegaStakingTier';

export type vegaReferralProgram = {
    /**
     * Defined benefit tiers ordered by increasing discounts.
     */
    benefitTiers?: Array<vegaBenefitTier>;
    /**
     * Timestamp in Unix nanoseconds, after which when the current epoch ends,
     * the program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
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


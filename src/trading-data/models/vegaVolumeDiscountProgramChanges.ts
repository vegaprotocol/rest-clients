/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeBenefitTier } from './vegaVolumeBenefitTier';

export type vegaVolumeDiscountProgramChanges = {
    /**
     * Defined benefit tiers in increasing order. First element will give Tier 1,
     * second element will give Tier 2, and so on. Determines the level of
     * benefit a party can expect based on performance criteria.
     */
    benefitTiers?: Array<vegaVolumeBenefitTier>;
    /**
     * Timestamp as Unix time in seconds, after which when the current epoch
     * ends, the program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Number of epochs over which to evaluate a referral set's running volume.
     */
    windowLength?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeBenefitTier } from './vegaVolumeBenefitTier';

export type vegaVolumeDiscountProgram = {
    /**
     * Defined benefit tiers ordered by increasing discounts.
     */
    benefitTiers?: Array<vegaVolumeBenefitTier>;
    /**
     * Timestamp in Unix seconds, after which when the current epoch
     * ends, the program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Unique ID generated from the proposal that created this program.
     */
    id?: string;
    /**
     * Incremental version of the program. It is incremented after each program
     * update.
     */
    version?: string;
    /**
     * Number of epochs over which a referral set's running volume is evaluated.
     */
    windowLength?: string;
};


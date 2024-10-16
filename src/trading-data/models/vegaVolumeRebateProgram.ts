/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeRebateBenefitTier } from './vegaVolumeRebateBenefitTier';

export type vegaVolumeRebateProgram = {
    /**
     * Defined benefit tiers ordered by increasing rebates.
     */
    benefitTiers?: Array<vegaVolumeRebateBenefitTier>;
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


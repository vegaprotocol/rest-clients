/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVolumeRebateBenefitTier } from './vegaVolumeRebateBenefitTier';

/**
 * Volume rebate program details.
 */
export type apiv2VolumeRebateProgram = {
    /**
     * Defined benefit tiers ordered by increasing discounts. Determines the level of
     * benefit a party can expect based on performance criteria.
     */
    benefitTiers?: Array<vegaVolumeRebateBenefitTier>;
    /**
     * Timestamp in Unix nanoseconds, after which when the current epoch
     * ends, the program will end and benefits will be disabled.
     */
    endOfProgramTimestamp?: string;
    /**
     * Timestamp in Unix nanoseconds, at which the program ended.
     */
    endedAt?: string;
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
     * Number of epochs over which a volume discount statistics' running volume is evaluated.
     */
    windowLength?: string;
};


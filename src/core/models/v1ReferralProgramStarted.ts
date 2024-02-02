/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaReferralProgram } from './vegaReferralProgram';

export type v1ReferralProgramStarted = {
    /**
     * Epoch at which the referral program started.
     */
    atEpoch?: string;
    /**
     * Referral program that has started.
     */
    program?: vegaReferralProgram;
    /**
     * Time in Unix nanoseconds when the referral program started.
     */
    startedAt?: string;
};


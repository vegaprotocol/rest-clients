/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaReferralProgram } from './vegaReferralProgram';

export type v1ReferralProgramUpdated = {
    /**
     * Epoch at which the referral program was updated.
     */
    atEpoch?: string;
    /**
     * The updated referral program.
     */
    program?: vegaReferralProgram;
    /**
     * Time in Unix nanoseconds when the referral program was updated.
     */
    updatedAt?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1RefereeStats } from './v1RefereeStats';

export type v2ReferralSetStats = {
    /**
     * Epoch at which the set's statistics are updated.
     */
    atEpoch?: string;
    /**
     * Referees' statistics for that epoch.
     */
    refereesStats?: Array<v1RefereeStats>;
    /**
     * Running volume for the set based on the window length of the current
     * referral program.
     */
    referralSetRunningNotionalTakerVolume?: string;
    /**
     * Unique ID of the set.
     */
    setId?: string;
};


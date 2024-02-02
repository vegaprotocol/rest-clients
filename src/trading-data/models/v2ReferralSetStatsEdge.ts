/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ReferralSetStats } from './v2ReferralSetStats';

/**
 * Referral set stats data with the corresponding cursor.
 */
export type v2ReferralSetStatsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Referral set stats data.
     */
    node?: v2ReferralSetStats;
};


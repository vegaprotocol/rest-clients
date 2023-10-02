/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ReferralSet } from './v2ReferralSet';

/**
 * Referral set data with the corresponding cursor.
 */
export type v2ReferralSetEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Referral set data.
     */
    node?: v2ReferralSet;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ReferralSetReferee } from './v2ReferralSetReferee';

/**
 * Data about the Referral set's referees with the corresponding cursor.
 */
export type v2ReferralSetRefereeEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Referral set referee data.
     */
    node?: v2ReferralSetReferee;
};


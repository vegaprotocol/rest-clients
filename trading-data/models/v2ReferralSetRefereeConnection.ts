/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2ReferralSetRefereeEdge } from './v2ReferralSetRefereeEdge';

/**
 * Page of data about the referral set's referees and corresponding page information.
 */
export type v2ReferralSetRefereeConnection = {
    /**
     * Page of referral set referee data and their corresponding cursors.
     */
    edges?: Array<v2ReferralSetRefereeEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2ReferralSetEdge } from './v2ReferralSetEdge';

/**
 * Page of referral set data and corresponding page information.
 */
export type v2ReferralSetConnection = {
    /**
     * Page of referral set data and their corresponding cursors.
     */
    edges?: Array<v2ReferralSetEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


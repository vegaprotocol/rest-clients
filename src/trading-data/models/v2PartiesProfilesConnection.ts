/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2PartyProfileEdge } from './v2PartyProfileEdge';

/**
 * Page of profile data per party and corresponding page information.
 */
export type v2PartiesProfilesConnection = {
    /**
     * Page of profiles and their corresponding cursors.
     */
    edges?: Array<v2PartyProfileEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


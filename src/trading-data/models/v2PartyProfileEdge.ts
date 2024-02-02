/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPartyProfile } from './vegaPartyProfile';

/**
 * Party's profile data with the corresponding cursor.
 */
export type v2PartyProfileEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a party's profile.
     */
    node?: vegaPartyProfile;
};


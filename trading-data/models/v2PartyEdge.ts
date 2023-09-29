/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaParty } from './vegaParty';

/**
 * Party data with the corresponding cursor.
 */
export type v2PartyEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a party.
     */
    node?: vegaParty;
};


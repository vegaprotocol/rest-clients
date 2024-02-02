/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2FeesStatsForParty } from './v2FeesStatsForParty';

/**
 * Response that is sent when requesting fees statistics for a given party.
 */
export type v2GetFeesStatsForPartyResponse = {
    /**
     * Fees statistics for the given request.
     */
    feesStatsForParty?: Array<v2FeesStatsForParty>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyVolumeDiscountStats } from './v1PartyVolumeDiscountStats';

/**
 * Stats of all parties eligible for volume discount.
 */
export type v1VolumeDiscountStatsUpdated = {
    /**
     * Epoch at which the volume discount statistics are updated.
     */
    atEpoch?: string;
    /**
     * All parties' stats.
     */
    stats?: Array<v1PartyVolumeDiscountStats>;
};


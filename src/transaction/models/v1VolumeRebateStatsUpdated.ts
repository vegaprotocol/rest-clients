/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyVolumeRebateStats } from './v1PartyVolumeRebateStats';

/**
 * Stats of all parties eligible for volume rebate.
 */
export type v1VolumeRebateStatsUpdated = {
    /**
     * Epoch at which the volume rebate statistics are updated.
     */
    atEpoch?: string;
    /**
     * All parties' stats.
     */
    stats?: Array<v1PartyVolumeRebateStats>;
};


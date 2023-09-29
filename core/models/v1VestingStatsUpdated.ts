/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyVestingStats } from './v1PartyVestingStats';

/**
 * Stats of all parties invested in the vesting program.
 */
export type v1VestingStatsUpdated = {
    /**
     * Epoch at which the vesting statistics are updated.
     */
    atEpoch?: string;
    /**
     * All parties stats.
     */
    stats?: Array<v1PartyVestingStats>;
};


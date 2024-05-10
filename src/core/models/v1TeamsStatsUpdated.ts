/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1TeamStats } from './v1TeamStats';

/**
 * Stats for all teams.
 */
export type v1TeamsStatsUpdated = {
    /**
     * Epoch at which the statistics are updated.
     */
    atEpoch?: string;
    /**
     * All teams' stats.
     */
    stats?: Array<v1TeamStats>;
};


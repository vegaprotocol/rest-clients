/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2QuantumRewardsPerEpoch } from './v2QuantumRewardsPerEpoch';

/**
 * Team's statistics record containing the team information.
 */
export type v2TeamStatistics = {
    /**
     * List of games played over the requested epoch period.
     */
    gamesPlayed?: Array<string>;
    /**
     * List of rewards over the requested epoch period, expressed in quantum
     * value for each epoch.
     */
    quantumRewards?: Array<v2QuantumRewardsPerEpoch>;
    /**
     * Team ID the statistics are related to.
     */
    teamId?: string;
    /**
     * Total of games played.
     */
    totalGamesPlayed?: string;
    /**
     * Total of rewards accumulated over the requested epoch period, expressed in
     * quantum value.
     */
    totalQuantumRewards?: string;
    /**
     * Total of volume accumulated over the requested epoch period, expressed in
     * quantum value.
     */
    totalQuantumVolume?: string;
};


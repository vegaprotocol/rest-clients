/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2QuantumRewardsPerEpoch } from './v2QuantumRewardsPerEpoch';
import type { v2QuantumVolumesPerEpoch } from './v2QuantumVolumesPerEpoch';

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
     * List of volumes over the requested epoch period, expressed in quantum
     * value for each epoch.
     */
    quantumVolumes?: Array<v2QuantumVolumesPerEpoch>;
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


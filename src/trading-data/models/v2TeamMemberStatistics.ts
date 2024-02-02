/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2QuantumRewardsPerEpoch } from './v2QuantumRewardsPerEpoch';

/**
 * Team member's statistics record containing the team member's information.
 */
export type v2TeamMemberStatistics = {
    /**
     * List of games played over the requested epoch period.
     */
    gamesPlayed?: Array<string>;
    /**
     * Party ID the statistics are related to.
     */
    partyId?: string;
    /**
     * List of rewards over the requested epoch period, expressed in quantum
     * value for each epoch.
     */
    quantumRewards?: Array<v2QuantumRewardsPerEpoch>;
    /**
     * Total number of games played.
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


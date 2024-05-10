/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDispatchMetric } from './vegaDispatchMetric';

/**
 * Data relating to an individual participating in a game.
 * This can be used for both team members who are participating in a team game,
 * or individuals participating in an individual entity game.
 */
export type v2IndividualGameEntity = {
    individual?: string;
    /**
     * Rank of the individual either in the game or within their team.
     */
    rank?: string;
    rewardEarned?: string;
    rewardEarnedQuantum?: string;
    rewardMetric?: vegaDispatchMetric;
    totalRewardsEarned?: string;
    totalRewardsEarnedQuantum?: string;
    volume?: string;
};


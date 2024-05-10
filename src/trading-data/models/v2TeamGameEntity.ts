/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2TeamGameParticipation } from './v2TeamGameParticipation';
import type { vegaDispatchMetric } from './vegaDispatchMetric';

/**
 * Data relating to a team participating in a game.
 */
export type v2TeamGameEntity = {
    rank?: string;
    rewardEarned?: string;
    rewardEarnedQuantum?: string;
    rewardMetric?: vegaDispatchMetric;
    team?: v2TeamGameParticipation;
    totalRewardsEarned?: string;
    totalRewardsEarnedQuantum?: string;
    volume?: string;
};


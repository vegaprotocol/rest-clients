/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDispatchMetric } from './vegaDispatchMetric';
import type { vegaDistributionStrategy } from './vegaDistributionStrategy';
import type { vegaEntityScope } from './vegaEntityScope';
import type { vegaIndividualScope } from './vegaIndividualScope';
import type { vegaRank } from './vegaRank';

export type vegaDispatchStrategy = {
    /**
     * Asset to use for metric.
     */
    assetForMetric?: string;
    /**
     * If set, the actual amount of rewards transferred to each public key during distribution for this transfer will be `min(calculated_reward_in_quantum, cap_reward_fee_multiple × fees_paid_this_epoch_in_quantum).
     */
    capRewardFeeMultiple?: string;
    distributionStrategy?: vegaDistributionStrategy;
    /**
     * Mandatory enum that defines the entities within scope.
     */
    entityScope?: vegaEntityScope;
    /**
     * Optional enum if the entity scope defined is for individuals, which determines the subset of individuals that are eligible to be rewarded.
     */
    individualScope?: vegaIndividualScope;
    lockPeriod?: string;
    /**
     * Optional markets in scope.
     */
    markets?: Array<string>;
    /**
     * Metric to apply.
     */
    metric?: vegaDispatchMetric;
    nTopPerformers?: string;
    notionalTimeWeightedAveragePositionRequirement?: string;
    /**
     * Ordered list, using start rank, defining the rank bands and share ratio for each band. Mandatory for the rank distribution strategy.
     */
    rankTable?: Array<vegaRank>;
    stakingRequirement?: string;
    teamScope?: Array<string>;
    /**
     * Number of epochs between transfers, i.e. when 4, funds will be transferred every 4 epochs with the first transfer occurring 4 epochs after the transaction is processed.
     */
    transferInterval?: number;
    windowLength?: string;
};


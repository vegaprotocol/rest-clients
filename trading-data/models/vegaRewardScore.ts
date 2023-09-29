/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaValidatorNodeStatus } from './vegaValidatorNodeStatus';

export type vegaRewardScore = {
    /**
     * Multisig score.
     */
    multisigScore?: string;
    /**
     * Normalised validator score for rewards.
     */
    normalisedScore?: string;
    /**
     * Performance based score.
     */
    performanceScore?: string;
    /**
     * Stake based score - with anti-whaling.
     */
    rawValidatorScore?: string;
    /**
     * Un-normalised score.
     */
    validatorScore?: string;
    /**
     * Status of the validator for reward.
     */
    validatorStatus?: vegaValidatorNodeStatus;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaValidatorNodeStatus } from './vegaValidatorNodeStatus';

export type vegaRankingScore = {
    /**
     * Performance based score.
     */
    performanceScore?: string;
    /**
     * Status of the validator in the previous epoch.
     */
    previousStatus?: vegaValidatorNodeStatus;
    /**
     * Final score.
     */
    rankingScore?: string;
    /**
     * Stake based score - no anti-whaling.
     */
    stakeScore?: string;
    /**
     * Status of the validator in the current epoch.
     */
    status?: vegaValidatorNodeStatus;
    /**
     * Tendermint voting power of the validator.
     */
    votingPower?: number;
};


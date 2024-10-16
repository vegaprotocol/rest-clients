/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstimateAMMBoundsResponseAMMError } from './EstimateAMMBoundsResponseAMMError';

export type v2EstimateAMMBoundsResponse = {
    /**
     * If populated the bounds could be calculated but the AMM is invalid for other reasons.
     */
    ammError?: EstimateAMMBoundsResponseAMMError;
    /**
     * Estimated price below the lower bound at which the commitment will be lost.
     */
    liquidationPriceAtLower?: string;
    /**
     * Estimated price above upper bound at which the commitment will be lost.
     */
    liquidationPriceAtUpper?: string;
    /**
     * Loss of commitment at the lower bound.
     */
    lossOnCommitmentAtLower?: string;
    /**
     * Loss of commitment at the upper bound.
     */
    lossOnCommitmentAtUpper?: string;
    /**
     * Theoretical volume at the top of the lower bound.
     */
    positionSizeAtLower?: string;
    /**
     * Theoretical volume at the top of the upper bound.
     */
    positionSizeAtUpper?: string;
};


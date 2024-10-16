/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - AMM_ERROR_COMMITMENT_BELOW_MINIMUM: Commitment is below the global limit set by the network parameter `market.amm.minCommitmentQuantum`.
 * - AMM_ERROR_LOWER_BOUND_TOO_WIDE: AMM's lower price is too far from the base price for the given commitment resulting in too many zero volume price levels.
 * - AMM_ERROR_UPPER_BOUND_TOO_WIDE: AMM's upper price is too far from the base price for the given commitment resulting in too many zero volume price levels.
 * - AMM_ERROR_BOTH_BOUNDS_TOO_WIDE: AMM bounds are too wide for the given commitment resulting in too many zero volume price levels.
 */
export enum EstimateAMMBoundsResponseAMMError {
    AMM_ERROR_UNSPECIFIED = 'AMM_ERROR_UNSPECIFIED',
    AMM_ERROR_COMMITMENT_BELOW_MINIMUM = 'AMM_ERROR_COMMITMENT_BELOW_MINIMUM',
    AMM_ERROR_LOWER_BOUND_TOO_WIDE = 'AMM_ERROR_LOWER_BOUND_TOO_WIDE',
    AMM_ERROR_UPPER_BOUND_TOO_WIDE = 'AMM_ERROR_UPPER_BOUND_TOO_WIDE',
    AMM_ERROR_BOTH_BOUNDS_TOO_WIDE = 'AMM_ERROR_BOTH_BOUNDS_TOO_WIDE',
}

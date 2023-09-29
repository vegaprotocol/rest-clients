/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaScalingFactors = {
    /**
     * Collateral release level. If a trader has collateral above this level,
     * the system will release collateral to a trader's general collateral account
     * for the asset.
     */
    collateralRelease?: number;
    /**
     * Initial margin level. This is the minimum amount of collateral
     * required to open a position in a market that requires margin.
     */
    initialMargin?: number;
    /**
     * Collateral search level. If collateral dips below this value,
     * the system will search for collateral to release.
     */
    searchLevel?: number;
};


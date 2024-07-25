/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaFutureCap = {
    /**
     * If set to true, the settlement price must either be zero, or equal to the max price.
     */
    binarySettlement?: boolean;
    /**
     * If set to true, positions must be fully collateralised so there is no default risk for any party.
     */
    fullyCollateralised?: boolean;
    /**
     * Set the maximum price for orders, and settlement data in market decimals.
     */
    maxPrice?: string;
};


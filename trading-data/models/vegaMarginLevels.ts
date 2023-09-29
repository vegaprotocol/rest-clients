/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaMarginLevels = {
    /**
     * Asset ID for which the margin levels apply.
     */
    asset?: string;
    /**
     * Collateral release level value. This field is an unsigned integer scaled to the asset's decimal places.
     */
    collateralReleaseLevel?: string;
    /**
     * Initial margin value. This field is an unsigned integer scaled to the asset's decimal places.
     */
    initialMargin?: string;
    /**
     * Maintenance margin value. This field is an unsigned integer scaled to the asset's decimal places.
     */
    maintenanceMargin?: string;
    /**
     * Market ID for which the margin levels apply.
     */
    marketId?: string;
    /**
     * Party ID for whom the margin levels apply.
     */
    partyId?: string;
    /**
     * Margin search level value. This field is an unsigned integer scaled to the asset's decimal places.
     */
    searchLevel?: string;
    /**
     * Timestamp in Unix nanoseconds for when the ledger entry was created.
     */
    timestamp?: string;
};


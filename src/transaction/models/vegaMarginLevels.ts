/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarginMode } from './vegaMarginMode';

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
     * Margin factor, relevant only for isolated margin, 0 otherwise.
     */
    marginFactor?: string;
    /**
     * Margin mode for the party, cross margin or isolated margin.
     */
    marginMode?: vegaMarginMode;
    /**
     * Market ID for which the margin levels apply.
     */
    marketId?: string;
    /**
     * Margin required to cover orders in isolated margin mode.
     */
    orderMargin?: string;
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


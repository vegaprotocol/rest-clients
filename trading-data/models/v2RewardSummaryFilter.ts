/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2RewardSummaryFilter = {
    /**
     * Restrict reward summaries to those connected to the assets in the given list.
     */
    assetIds?: Array<string>;
    /**
     * Restrict rewards summaries to those that were paid after and including the given epoch ID.
     */
    fromEpoch?: string;
    /**
     * Restrict reward summaries to those connected to the markets in the given list.
     */
    marketIds?: Array<string>;
    /**
     * Restrict rewards summaries to those that were paid up to and including the given epoch ID.
     */
    toEpoch?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaReward = {
    /**
     * Amount paid as a reward. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset ID in which the reward is being paid.
     */
    assetId?: string;
    /**
     * Epoch in which the reward is being paid.
     */
    epoch?: string;
    /**
     * Market ID in which the reward is being paid.
     */
    marketId?: string;
    /**
     * Party ID to whom the reward is being paid.
     */
    partyId?: string;
    /**
     * Percentage of total rewards paid in the epoch.
     */
    percentageOfTotal?: string;
    /**
     * Timestamp at which the reward was paid as Unix nano time.
     */
    receivedAt?: string;
    /**
     * Type of reward being paid.
     */
    rewardType?: string;
};


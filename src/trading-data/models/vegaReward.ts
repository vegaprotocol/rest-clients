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
     * ID of the game the reward payment was made for if the payment was made for participation in a game.
     */
    gameId?: string;
    /**
     * The epoch when the reward is being released.
     */
    lockedUntilEpoch?: string;
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
     * Amount paid as a reward, expressed in asset's quantum unit.
     */
    quantumAmount?: string;
    /**
     * Timestamp at which the reward was paid as Unix nano time.
     */
    receivedAt?: string;
    /**
     * Type of reward being paid.
     */
    rewardType?: string;
    /**
     * ID of the team the party is a member of, if the party is a member of a participating team,
     * and the reward payment was made for participation in a game.
     * This field is currently only populated by the rewards API.
     */
    teamId?: string;
};


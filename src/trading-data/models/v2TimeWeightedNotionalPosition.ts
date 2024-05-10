/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Time weighted notional position for a party and asset at a given epoch. It is used as a metric to calculate whether
 * the party is eligible for receiving a reward.
 */
export type v2TimeWeightedNotionalPosition = {
    /**
     * Asset ID for the settlement asset associated with the position.
     */
    assetId?: string;
    /**
     * Epoch at which the time weighted notional position is calculated.
     */
    atEpoch?: string;
    /**
     * Game ID for the game associated with the position.
     */
    gameId?: string;
    /**
     * Vega time of the block in which the last position update occurred.
     */
    lastUpdated?: string;
    /**
     * Party ID for the party associated with the position.
     */
    partyId?: string;
    /**
     * Time weighted notional position for the party and asset.
     */
    timeWeightedNotionalPosition?: string;
};


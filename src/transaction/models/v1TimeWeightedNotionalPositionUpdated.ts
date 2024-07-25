/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Time weighted notional position update for the current epoch.
 * The time weighted notional position is used to determine whether
 * a party is eligible for receiving rewards at the end of an epoch.
 * These updates are provided to facilitate knowing whether or not a party
 * is on track to qualify.
 */
export type v1TimeWeightedNotionalPositionUpdated = {
    /**
     * Asset ID for the position's settlement asset.
     */
    asset?: string;
    epochSeq?: string;
    /**
     * Game ID the time weighted notional position is calculated for.
     */
    gameId?: string;
    party?: string;
    /**
     * Time weighted notional position from the end of the most recently completed epoch.
     */
    timeWeightedNotionalPosition?: string;
};


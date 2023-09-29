/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPositionStatus } from './vegaPositionStatus';

export type vegaPosition = {
    /**
     * Average entry price for the position, the price is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    averageEntryPrice?: string;
    /**
     * Sum of profit that could not be paid due to loss socialisation.
     */
    lossSocialisationAmount?: string;
    /**
     * Market ID in which the position is held.
     */
    marketId?: string;
    /**
     * Open volume for the position, value is signed +ve for long and -ve for short.
     */
    openVolume?: string;
    /**
     * Party ID holding the position.
     */
    partyId?: string;
    /**
     * Position status, indicating whether the party was distressed and had orders cancelled or was closed out.
     */
    positionStatus?: vegaPositionStatus;
    /**
     * Realised profit and loss for the position, value is signed +ve for long and -ve for short.
     * This field is a signed integer scaled to the market's decimal places.
     */
    realisedPnl?: string;
    /**
     * Unrealised profit and loss for the position, value is signed +ve for long and -ve for short.
     * This field is a signed integer scaled to the market's decimal places.
     */
    unrealisedPnl?: string;
    /**
     * Timestamp for the latest time the position was updated.
     */
    updatedAt?: string;
};


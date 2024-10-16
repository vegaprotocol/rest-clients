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
     * Total fees paid by a party on a market (liquidity, infrastructure, treasury, buy-back, high volume maker fee).
     */
    feesPaid?: string;
    /**
     * Fees paid since opening the current position.
     */
    feesPaidSince?: string;
    /**
     * Total funding payment amounts received or paid by a party on a market.
     */
    fundingPaymentAmount?: string;
    /**
     * Funding payments received or paid since opening the current position.
     */
    fundingPaymentAmountSince?: string;
    /**
     * Sum of profit that could not be paid due to loss socialisation.
     */
    lossSocialisationAmount?: string;
    /**
     * Total maker fees received by a party on a market.
     */
    makerFeesReceived?: string;
    /**
     * Maker fees received since opening the current position.
     */
    makerFeesReceivedSince?: string;
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
     * Total taker fees paid by a party on a market.
     */
    takerFeesPaid?: string;
    /**
     * Taker fees paid by party on a market since opening their current position.
     * The current position is counted whenever the party changed sides (long <=> short), or a position was opened.
     */
    takerFeesPaidSince?: string;
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


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1StakeLinkingStatus } from './v1StakeLinkingStatus';
import type { v1StakeLinkingType } from './v1StakeLinkingType';

export type v1StakeLinking = {
    /**
     * Amount of stake deposited or removed.
     */
    amount?: string;
    /**
     * Block when the event happened.
     */
    blockHeight?: string;
    /**
     * Block time.
     */
    blockTime?: string;
    /**
     * Ethereum address from which the stake link was initiated.
     */
    ethereumAddress?: string;
    /**
     * Time at which the Vega network finalised the state of the event.
     */
    finalizedAt?: string;
    id?: string;
    /**
     * Log index.
     */
    logIndex?: string;
    /**
     * Party to whom the event is directed at.
     */
    party?: string;
    /**
     * Status of the event.
     */
    status?: v1StakeLinkingStatus;
    /**
     * Timestamp in Unix nanoseconds of when the event was emitted by Ethereum.
     */
    ts?: string;
    /**
     * Hash of the transaction in which the event happened.
     */
    txHash?: string;
    /**
     * Stake linking event type.
     */
    type?: v1StakeLinkingType;
};


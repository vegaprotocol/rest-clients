/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

/**
 * A validator command which is sent automatically at regular intervals by any validator participating in the network.
 * It is used to allow the network to know whether a validator is active, or if they have shut down.
 */
export type v1ValidatorHeartbeat = {
    /**
     * Signature from the validator made using their Ethereum wallet.
     */
    ethereumSignature?: v1Signature;
    /**
     * Message which has been signed.
     */
    message?: string;
    /**
     * Node ID of the validator emitting the heartbeat.
     */
    nodeId?: string;
    /**
     * Signature from the validator made using their Vega wallet.
     */
    vegaSignature?: v1Signature;
};


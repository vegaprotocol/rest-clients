/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

export type v1ValidatorHeartbeat = {
    /**
     * Signature from the validator made using the ethereum wallet.
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
     * Signature from the validator made using the vega wallet.
     */
    vegaSignature?: v1Signature;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1KeyRotateSubmission = {
    /**
     * Hash of currently used public key.
     */
    currentPubKeyHash?: string;
    /**
     * New public key to rotate to.
     */
    newPubKey?: string;
    /**
     * New Vega public key derivation index.
     */
    newPubKeyIndex?: number;
    /**
     * Target block at which the key rotation will take effect on.
     */
    targetBlock?: string;
};


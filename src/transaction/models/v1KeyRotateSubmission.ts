/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A validator command sent manually that allows a node operator to indicate to the network that their node's Vega key will be rotated.
 */
export type v1KeyRotateSubmission = {
    /**
     * Hash of the node's current Vega public key.
     */
    currentPubKeyHash?: string;
    /**
     * Vega public key that would be rotated to.
     */
    newPubKey?: string;
    /**
     * New Vega public key derivation index.
     */
    newPubKeyIndex?: number;
    /**
     * Block height at which the key rotation will take effect.
     */
    targetBlock?: string;
};


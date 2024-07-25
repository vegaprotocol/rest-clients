/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

/**
 * A validator command sent manually that allows a node operator to indicate to the network that their node's Ethereum key will be rotated.
 */
export type v1EthereumKeyRotateSubmission = {
    /**
     * Ethereum address of the node's current Ethereum keys.
     */
    currentAddress?: string;
    /**
     * Signature signed by the new Ethereum key that can be verified to prove ownership.
     */
    ethereumSignature?: v1Signature;
    /**
     * Ethereum address that is being rotated to.
     */
    newAddress?: string;
    /**
     * Ethereum public key to use as a submitter to allow automatic signature generation.
     */
    submitterAddress?: string;
    /**
     * Block height at which the key rotation will take effect.
     */
    targetBlock?: string;
};


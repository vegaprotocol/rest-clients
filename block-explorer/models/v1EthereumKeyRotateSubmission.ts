/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

export type v1EthereumKeyRotateSubmission = {
    /**
     * Currently used public address.
     */
    currentAddress?: string;
    /**
     * Signature that can be verified using the new ethereum address.
     */
    ethereumSignature?: v1Signature;
    /**
     * New address to rotate to.
     */
    newAddress?: string;
    /**
     * Ethereum public key to use as a submitter to allow automatic signature generation.
     */
    submitterAddress?: string;
    /**
     * Target block at which the key rotation will take effect on.
     */
    targetBlock?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Components needed for the network to verify proof-of-work.
 */
export type v1ProofOfWork = {
    /**
     * Number which, combined with the transaction identifier, will produce a hash with the required number of leading zeros to be accepted by the network.
     */
    nonce?: string;
    /**
     * Unique transaction identifier used to seed the proof-of-work hash.
     */
    tid?: string;
};


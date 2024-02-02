/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Signature definition that allows the network to authenticate external data.
 */
export type v1Signature = {
    /**
     * Algorithm used to create the signature.
     */
    algo?: string;
    /**
     * Hex encoded bytes of the signature.
     */
    value?: string;
    /**
     * Version of the algorithm used to create the signature.
     */
    version?: number;
};


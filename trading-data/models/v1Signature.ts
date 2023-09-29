/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Signature to authenticate a transaction and to be verified by the Vega
 * network.
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
     * Version of the signature used to create the signature.
     */
    version?: number;
};


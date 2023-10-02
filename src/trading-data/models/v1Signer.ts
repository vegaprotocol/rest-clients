/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ETHAddress } from './v1ETHAddress';
import type { v1PubKey } from './v1PubKey';

export type v1Signer = {
    /**
     * In case of an open oracle - Ethereum address will be submitted.
     */
    ethAddress?: v1ETHAddress;
    /**
     * List of authorized public keys that signed the data for this
     * source. All the public keys in the data should be contained in these
     * public keys.
     */
    pubKey?: v1PubKey;
};


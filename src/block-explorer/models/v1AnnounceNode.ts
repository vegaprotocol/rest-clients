/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

export type v1AnnounceNode = {
    /**
     * AvatarURL of the validator.
     */
    avatarUrl?: string;
    /**
     * Public key for the blockchain, required field.
     */
    chainPubKey?: string;
    /**
     * Country code (ISO 3166-1 alpha-2) for the location of the node.
     */
    country?: string;
    /**
     * Ethereum public key, required field.
     */
    ethereumAddress?: string;
    /**
     * Signature from the validator made using the ethereum wallet.
     */
    ethereumSignature?: v1Signature;
    /**
     * Epoch from which the validator is expected
     * to be ready to validate blocks.
     */
    fromEpoch?: string;
    /**
     * Node ID of the validator, i.e. the node's public master key.
     */
    id?: string;
    /**
     * URL with more info on the node.
     */
    infoUrl?: string;
    /**
     * Name of the validator.
     */
    name?: string;
    /**
     * Ethereum public key to use as a submitter to allow automatic signature generation.
     */
    submitterAddress?: string;
    /**
     * Vega public key, required field.
     */
    vegaPubKey?: string;
    /**
     * Vega public key derivation index.
     */
    vegaPubKeyIndex?: number;
    /**
     * Signature from the validator made using the Vega wallet.
     */
    vegaSignature?: v1Signature;
};


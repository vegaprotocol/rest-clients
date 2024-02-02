/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Signature } from './v1Signature';

/**
 * A command that allows a new node operator to announce themselves to the network as a new validator.
 */
export type v1AnnounceNode = {
    /**
     * URL to the node operator's avatar.
     */
    avatarUrl?: string;
    /**
     * Public key for the blockchain, currently the node's CometBFT key.
     */
    chainPubKey?: string;
    /**
     * Country code (ISO 3166-1 alpha-2) for the location of the node.
     */
    country?: string;
    /**
     * Ethereum public key of the node being announced.
     */
    ethereumAddress?: string;
    /**
     * Signature from the node made using the ethereum wallet.
     */
    ethereumSignature?: v1Signature;
    /**
     * Epoch from which the node is expected to be ready to validate blocks.
     */
    fromEpoch?: string;
    /**
     * Node ID of the validator, which is the node's public master key.
     */
    id?: string;
    /**
     * URL to the node operators homepage allowing stake holders to make an informed decision when delegating.
     */
    infoUrl?: string;
    /**
     * Human-readable name of the node.
     */
    name?: string;
    /**
     * Ethereum public key to use as a submitter to allow automatic signature generation.
     */
    submitterAddress?: string;
    /**
     * Vega public key of the node being announced.
     */
    vegaPubKey?: string;
    /**
     * Vega public key derivation index.
     */
    vegaPubKeyIndex?: number;
    /**
     * Signature from the node made using the Vega wallet.
     */
    vegaSignature?: v1Signature;
};


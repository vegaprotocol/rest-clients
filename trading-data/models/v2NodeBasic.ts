/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaNodeStatus } from './vegaNodeStatus';

/**
 * Represents a basic node without any epoch specific details like delegations, staking, rewards etc.
 */
export type v2NodeBasic = {
    /**
     * Avatar URL.
     */
    avatarUrl?: string;
    /**
     * Ethereum public key of the node.
     */
    ethereumAddress?: string;
    /**
     * Unique ID identifying the node.
     */
    id?: string;
    /**
     * URL that provides more information about the node.
     */
    infoUrl?: string;
    /**
     * Country code for the location of the node.
     */
    location?: string;
    /**
     * Node name.
     */
    name?: string;
    /**
     * Node operator's public key.
     */
    pubKey?: string;
    /**
     * Node status.
     */
    status?: vegaNodeStatus;
    /**
     * Tendermint public key of the node.
     */
    tmPubKey?: string;
};


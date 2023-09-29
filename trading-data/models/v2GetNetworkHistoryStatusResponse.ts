/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GetNetworkHistoryStatusResponse = {
    /**
     * List of peers connected to the IPFS swarm.
     */
    connectedPeers?: Array<string>;
    /**
     * IPFS address of the data node currently connected to.
     */
    ipfsAddress?: string;
    /**
     * Swarm key used by the IPFS swarm.
     */
    swarmKey?: string;
    /**
     * Swarm key seed used by the IPFS swarm.
     */
    swarmKeySeed?: string;
};


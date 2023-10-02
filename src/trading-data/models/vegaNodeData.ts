/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaNodeSet } from './vegaNodeSet';

export type vegaNodeData = {
    /**
     * Details on the set of ersatz (standby) nodes in the network.
     */
    ersatzNodes?: vegaNodeSet;
    /**
     * Total number of nodes that had a performance score of 0 at the end of the last epoch.
     */
    inactiveNodes?: number;
    /**
     * Details on the set of pending nodes in the network.
     */
    pendingNodes?: vegaNodeSet;
    /**
     * Total staked amount across all nodes. This field is an unsigned integer scaled to the asset's decimal places.
     */
    stakedTotal?: string;
    /**
     * Details on the set of consensus nodes in the network.
     */
    tendermintNodes?: vegaNodeSet;
    /**
     * Total number of nodes across all node sets.
     */
    totalNodes?: number;
    /**
     * Total uptime for all epochs across all nodes.
     */
    uptime?: number;
};


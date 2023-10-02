/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaNodeSet = {
    /**
     * IDs of nodes that were demoted into this node set at the start of the epoch.
     */
    demoted?: Array<string>;
    /**
     * Number of nodes in the node set that had a performance score of 0 at the end of the last epoch.
     */
    inactive?: number;
    /**
     * Total number of nodes allowed in the node set.
     */
    maximum?: number;
    /**
     * IDs of nodes that were promoted into this node set at the start of the epoch.
     */
    promoted?: Array<string>;
    /**
     * Total number of nodes in the node set.
     */
    total?: number;
};


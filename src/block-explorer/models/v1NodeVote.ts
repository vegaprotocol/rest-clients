/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeVoteType } from './v1NodeVoteType';

/**
 * A validator command which is sent automatically by a node when it has verified a resource external to the network.
 */
export type v1NodeVote = {
    /**
     * Reference identifying the resource that has been verified.
     */
    reference?: string;
    /**
     * Type of external event that has been verified.
     */
    type?: v1NodeVoteType;
};


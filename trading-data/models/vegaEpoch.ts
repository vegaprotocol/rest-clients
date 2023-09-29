/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDelegation } from './vegaDelegation';
import type { vegaEpochTimestamps } from './vegaEpochTimestamps';
import type { vegaNode } from './vegaNode';

export type vegaEpoch = {
    /**
     * List of all delegations in epoch.
     */
    delegations?: Array<vegaDelegation>;
    /**
     * Sequence is used as epoch ID.
     */
    seq?: string;
    /**
     * Timestamps for start/end etc.
     */
    timestamps?: vegaEpochTimestamps;
    /**
     * Validators that participated in this epoch.
     */
    validators?: Array<vegaNode>;
};


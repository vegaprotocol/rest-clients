/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Property } from './v1Property';
import type { v1Signer } from './v1Signer';

/**
 * Data describes valid source data that has been received by the node.
 * It represents both matched and unmatched data.
 */
export type v1Data = {
    /**
     * Timestamp in Unix nanoseconds for when the data was broadcast to the markets
     * with a matching spec. It has no value when the data did not match any spec.
     */
    broadcastAt?: string;
    data?: Array<v1Property>;
    /**
     * Error message if the data could not be sourced.
     */
    error?: string;
    /**
     * `matched_specs_ids` lists all the specs that matched this data.
     * When the array is empty, it means no spec matched this data.
     */
    matchedSpecIds?: Array<string>;
    metaData?: Array<v1Property>;
    signers?: Array<v1Signer>;
};


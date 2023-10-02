/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1EthereumKeyRotation } from './v1EthereumKeyRotation';

/**
 * Ethereum key rotation data with the corresponding cursor.
 */
export type v2EthereumKeyRotationEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data relating to an Ethereum key rotation performed by a node on the Vega network.
     */
    node?: v1EthereumKeyRotation;
};


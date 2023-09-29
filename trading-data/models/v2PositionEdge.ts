/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPosition } from './vegaPosition';

/**
 * Position data with the corresponding cursor.
 */
export type v2PositionEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Position data for a party on a market.
     */
    node?: vegaPosition;
};


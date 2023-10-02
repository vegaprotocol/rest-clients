/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAsset } from './vegaAsset';

/**
 * Assets data with the corresponding cursor.
 */
export type v2AssetEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Asset data returned.
     */
    node?: vegaAsset;
};


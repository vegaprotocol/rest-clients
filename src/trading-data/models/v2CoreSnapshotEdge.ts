/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1CoreSnapshotData } from './v1CoreSnapshotData';

/**
 * Core snapshot data with the corresponding cursor.
 */
export type v2CoreSnapshotEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Core snapshot data.
     */
    node?: v1CoreSnapshotData;
};


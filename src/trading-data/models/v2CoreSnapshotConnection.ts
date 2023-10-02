/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2CoreSnapshotEdge } from './v2CoreSnapshotEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of core snapshot data and corresponding page information.
 */
export type v2CoreSnapshotConnection = {
    /**
     * Page of core snapshot data and their corresponding cursors.
     */
    edges?: Array<v2CoreSnapshotEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2CoreSnapshotConnection } from './v2CoreSnapshotConnection';

/**
 * Response from a ListCoreSnapshots RPC call; a paginated list of the core snapshots.
 */
export type v2ListCoreSnapshotsResponse = {
    /**
     * Page of core snapshot data and corresponding page information.
     */
    coreSnapshots?: v2CoreSnapshotConnection;
};


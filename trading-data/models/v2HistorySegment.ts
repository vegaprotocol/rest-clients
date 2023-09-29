/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2HistorySegment = {
    /**
     * Chain ID of the history segment.
     */
    chainId?: string;
    /**
     * Database schema version of the history segment.
     */
    databaseVersion?: string;
    /**
     * Starting height of the history segment.
     */
    fromHeight?: string;
    /**
     * History segment ID.
     */
    historySegmentId?: string;
    /**
     * Previous history segment ID.
     */
    previousHistorySegmentId?: string;
    /**
     * Ending height of the history segment.
     */
    toHeight?: string;
};


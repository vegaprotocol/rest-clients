/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Date range for queries that can return historical data
 * Timestamps should be provided as unix time in Unix nanoseconds and are inclusive.
 */
export type v2DateRange = {
    /**
     * Timestamp in Unix nanoseconds indicating the end of the date range.
     */
    endTimestamp?: string;
    /**
     * Timestamp in Unix nanoseconds indicating the start of the date range.
     */
    startTimestamp?: string;
};


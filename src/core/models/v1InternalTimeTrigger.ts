/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Trigger for an internal time data source.
 */
export type v1InternalTimeTrigger = {
    /**
     * Repeat the trigger every n seconds after the initial. If no time for
     * initial was specified, begin repeating immediately.
     */
    every?: string;
    /**
     * Trigger when the vega time is greater or equal to this time, in Unix seconds.
     */
    initial?: string;
};


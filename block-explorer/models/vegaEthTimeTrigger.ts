/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Trigger for an Ethereum call based on the Ethereum block timestamp. Can be
 * one-off or repeating.
 */
export type vegaEthTimeTrigger = {
    /**
     * Repeat the call every n seconds after the initial call. If no time for
     * initial call was specified, begin repeating immediately.
     */
    every?: string;
    /**
     * Trigger when the Ethereum time is greater or equal to this time, in Unix
     * seconds.
     */
    initial?: string;
    /**
     * If repeating, stop once Ethereum time is greater than this time, in Unix
     * seconds. If not set, then repeat indefinitely.
     */
    until?: string;
};


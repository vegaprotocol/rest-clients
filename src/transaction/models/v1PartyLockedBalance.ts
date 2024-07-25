/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A party's locked balance for a given asset.
 */
export type v1PartyLockedBalance = {
    /**
     * Asset ID.
     */
    asset?: string;
    /**
     * Locked balance.
     */
    balance?: string;
    /**
     * Epoch in which the balance will be released.
     */
    untilEpoch?: string;
};


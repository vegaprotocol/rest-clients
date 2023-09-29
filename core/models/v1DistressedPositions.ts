/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Distressed positions event contains the party IDs for all parties that were distressed, had their orders closed but because of insufficient volume on the book
 * could not be fully closed out. These parties are distressed, but still hold an active position on the book as a result. Once enough volume is on the book to close
 * them out, a SettleDistressed event will be sent. In case they manage to reduce their position, or meet the margin requirements, this status will be updated.
 * Parties that are no longer distressed but active will be listed in the safe_parties field.
 */
export type v1DistressedPositions = {
    distressedParties?: Array<string>;
    marketId?: string;
    safeParties?: Array<string>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMetadata } from './vegaMetadata';

/**
 * Command to associate metadata to a public key, known as a party ID.
 * Partial update is not supported, meaning previous values must be included in
 * the update, otherwise they are removed.
 */
export type v1UpdatePartyProfile = {
    /**
     * Alias given to the party. It must be unique network-wide.
     */
    alias?: string;
    /**
     * Freeform data to associate to the party.
     * Support a maximum of 10 entries.
     */
    metadata?: Array<vegaMetadata>;
};


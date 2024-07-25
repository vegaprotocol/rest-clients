/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMetadata } from './vegaMetadata';

/**
 * Holds metadata associated to a party.
 */
export type vegaPartyProfile = {
    /**
     * Alias given to the party.
     */
    alias?: string;
    /**
     * Derived keys for the party.
     */
    derivedKeys?: Array<string>;
    /**
     * Metadata to associate to a party, in a key/value format where the key
     * describes the type of metadata in the value field.
     */
    metadata?: Array<vegaMetadata>;
    /**
     * Party ID associated to the profile.
     */
    partyId?: string;
};


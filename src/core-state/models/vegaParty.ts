/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMetadata } from './vegaMetadata';

export type vegaParty = {
    /**
     * Alias given to the party.
     */
    alias?: string;
    /**
     * Unique ID for the party, typically represented by a public key.
     */
    id?: string;
    /**
     * Metadata to associate to a party, in a key/value format where the key
     * describes the type of metadata in the value field.
     */
    metadata?: Array<vegaMetadata>;
};


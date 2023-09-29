/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

/**
 * Account filter is used to filter account data.
 *
 * An account is defined as a set of asset ID, type, party ID, and market ID.
 * - Every account has an associated asset and type.
 * - Certain account types such as the global reward pool for example, do not have an associated party.
 * These are denoted by the special party ID 'network'.
 * - Certain account types do not have an associated market such as the general party accounts, for example.
 * These are denoted by the special market ID '' (an empty string).
 */
export type v2AccountFilter = {
    /**
     * Restrict accounts to those connected to any of the types in this list. Pass an empty list for no filter.
     */
    accountTypes?: Array<vegaAccountType>;
    /**
     * Restrict accounts to those holding balances in this asset ID.
     */
    assetId?: string;
    /**
     * Restrict accounts to those connected to the markets in this list. Pass an empty list for no filter.
     */
    marketIds?: Array<string>;
    /**
     * Restrict accounts to those owned by the parties in this list. Pass an empty list for no filter.
     */
    partyIds?: Array<string>;
};


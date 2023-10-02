/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

export type v2AggregatedBalance = {
    /**
     * If grouping by account type, the account type.
     */
    accountType?: vegaAccountType;
    /**
     * If grouping by asset, the asset ID.
     */
    assetId?: string;
    /**
     * Balance of the set of requested accounts at the time above.
     */
    balance?: string;
    marketId?: string;
    /**
     * If grouping by party, the party ID.
     */
    partyId?: string;
    /**
     * Timestamp in Unix nanoseconds of the block in which the balance exists.
     */
    timestamp?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

export type vegaAccountDetails = {
    /**
     * Asset ID of the asset for this account.
     */
    assetId?: string;
    /**
     * Not specified if account is not related to a market.
     */
    marketId?: string;
    /**
     * Not specified if network account.
     */
    owner?: string;
    /**
     * Type of the account.
     */
    type?: vegaAccountType;
};


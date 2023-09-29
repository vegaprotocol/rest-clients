/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

export type v2AccountBalance = {
    /**
     * Asset ID for the account.
     */
    asset?: string;
    /**
     * Asset balance represented as an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     * Balances cannot be negative.
     */
    balance?: string;
    /**
     * Market ID for the account, this field will be empty if the asset is in a general account.
     */
    marketId?: string;
    /**
     * Party that owns the account.
     * Special values include `network` - represents the Vega network and is
     * most commonly seen during liquidation of a distressed trading position.
     */
    owner?: string;
    /**
     * Account type of this account.
     */
    type?: vegaAccountType;
};


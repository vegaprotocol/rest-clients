/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';

export type vegaAccount = {
    /**
     * Asset ID for the account.
     */
    asset?: string;
    /**
     * Balance of the asset, the balance is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places
     * and importantly balances cannot be negative.
     */
    balance?: string;
    /**
     * Unique account ID, used internally by Vega.
     */
    id?: string;
    /**
     * Market ID for the account, if `AccountType.ACCOUNT_TYPE_GENERAL` this will be empty.
     */
    marketId?: string;
    /**
     * Party that the account belongs to, special values include `network`, which represents the Vega network and is
     * most commonly seen during liquidation of distressed trading positions.
     */
    owner?: string;
    /**
     * Account type related to this account.
     */
    type?: vegaAccountType;
};


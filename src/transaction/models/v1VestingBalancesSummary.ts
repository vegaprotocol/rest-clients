/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyVestingSummary } from './v1PartyVestingSummary';

export type v1VestingBalancesSummary = {
    /**
     * Epoch for which these balances are valid.
     */
    epochSeq?: string;
    /**
     * Parties' summaries.
     */
    partiesVestingSummary?: Array<v1PartyVestingSummary>;
};


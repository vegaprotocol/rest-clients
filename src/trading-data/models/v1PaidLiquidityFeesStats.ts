/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyAmount } from './v1PartyAmount';

export type v1PaidLiquidityFeesStats = {
    /**
     * Settlement asset of the market.
     */
    asset?: string;
    /**
     * Epoch for which these stats where valid.
     */
    epochSeq?: string;
    /**
     * Fees paid per party.
     */
    feesPaidPerParty?: Array<v1PartyAmount>;
    /**
     * Market the fees were paid in.
     */
    market?: string;
    /**
     * Total fees paid across all parties.
     */
    totalFeesPaid?: string;
};


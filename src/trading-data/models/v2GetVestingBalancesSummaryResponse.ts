/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyLockedBalance } from './v1PartyLockedBalance';
import type { v1PartyVestingBalance } from './v1PartyVestingBalance';

/**
 * List of vesting and locked balances for a party.
 */
export type v2GetVestingBalancesSummaryResponse = {
    /**
     * Epoch for which these balances are valid.
     */
    epochSeq?: string;
    /**
     * List of locked balances for the party.
     */
    lockedBalances?: Array<v1PartyLockedBalance>;
    /**
     * Party ID.
     */
    partyId?: string;
    /**
     * List of vesting balances for the party.
     */
    vestingBalances?: Array<v1PartyVestingBalance>;
};


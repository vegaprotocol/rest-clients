/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyLockedBalance } from './v1PartyLockedBalance';
import type { v1PartyVestingBalance } from './v1PartyVestingBalance';

export type v1PartyVestingSummary = {
    /**
     * Party ID.
     */
    party?: string;
    /**
     * List of locked balances.
     */
    partyLockedBalances?: Array<v1PartyLockedBalance>;
    /**
     * List of vesting balances.
     */
    partyVestingBalances?: Array<v1PartyVestingBalance>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLedgerEntry } from './vegaLedgerEntry';
import type { vegaPostTransferBalance } from './vegaPostTransferBalance';

export type vegaLedgerMovement = {
    /**
     * Resulting balances once the ledger movement are applied.
     */
    balances?: Array<vegaPostTransferBalance>;
    /**
     * All the entries for these ledger movements.
     */
    entries?: Array<vegaLedgerEntry>;
};


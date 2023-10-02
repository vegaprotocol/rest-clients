/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountDetails } from './vegaAccountDetails';
import type { vegaTransferType } from './vegaTransferType';

export type vegaLedgerEntry = {
    /**
     * Amount to transfer. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * One or more accounts to transfer from.
     */
    fromAccount?: vegaAccountDetails;
    /**
     * Sender account balance after the transfer. This field is an unsigned integer scaled to the asset's decimal places.
     */
    fromAccountBalance?: string;
    /**
     * Timestamp in nanoseconds of when the ledger entry was created.
     */
    timestamp?: string;
    /**
     * One or more accounts to transfer to.
     */
    toAccount?: vegaAccountDetails;
    /**
     * Receiver account balance after the transfer. This field is an unsigned integer scaled to the asset's decimal places.
     */
    toAccountBalance?: string;
    /**
     * Transfer type for this entry.
     */
    type?: vegaTransferType;
};


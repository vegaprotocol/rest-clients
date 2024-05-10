/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';
import type { vegaTransferType } from './vegaTransferType';

export type v2AggregatedLedgerEntry = {
    /**
     * Asset ID for the asset associated with the entry.
     */
    assetId?: string;
    /**
     * Sender account balance after the transfer.
     */
    fromAccountBalance?: string;
    /**
     * Sender market ID.
     */
    fromAccountMarketId?: string;
    /**
     * Sender's party ID.
     */
    fromAccountPartyId?: string;
    /**
     * Type of account sent from.
     */
    fromAccountType?: vegaAccountType;
    /**
     * Amount of ledger entries for the set of requested accounts at the time above.
     */
    quantity?: string;
    /**
     * Timestamp in Unix nanoseconds of the block in which the result is referring to.
     */
    timestamp?: string;
    /**
     * Receiver account balance after the transfer.
     */
    toAccountBalance?: string;
    /**
     * Receiver market ID.
     */
    toAccountMarketId?: string;
    /**
     * Receiver's party ID.
     */
    toAccountPartyId?: string;
    /**
     * Type of account received to.
     */
    toAccountType?: vegaAccountType;
    /**
     * Transfer ID associated with the ledger entry.
     */
    transferId?: string;
    /**
     * Transfer type.
     */
    transferType?: vegaTransferType;
};


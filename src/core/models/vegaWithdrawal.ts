/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaWithdrawalStatus } from './vegaWithdrawalStatus';
import type { vegaWithdrawExt } from './vegaWithdrawExt';

export type vegaWithdrawal = {
    /**
     * Amount to be withdrawn. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset to withdraw funds from.
     */
    asset?: string;
    /**
     * Timestamp for when the network started to process this withdrawal.
     */
    createdTimestamp?: string;
    /**
     * Foreign chain specifics.
     */
    ext?: vegaWithdrawExt;
    /**
     * Unique ID for the withdrawal.
     */
    id?: string;
    /**
     * Unique party ID of the user initiating the withdrawal.
     */
    partyId?: string;
    /**
     * Reference which is used by the foreign chain
     * to refer to this withdrawal.
     */
    ref?: string;
    /**
     * Status of the withdrawal.
     */
    status?: vegaWithdrawalStatus;
    /**
     * Hash of the foreign chain for this transaction.
     */
    txHash?: string;
    /**
     * Timestamp for when the withdrawal was finalised by the network.
     */
    withdrawnTimestamp?: string;
};


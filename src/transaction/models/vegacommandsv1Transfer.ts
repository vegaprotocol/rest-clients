/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';
import type { vegacommandsv1OneOffTransfer } from './vegacommandsv1OneOffTransfer';
import type { vegacommandsv1RecurringTransfer } from './vegacommandsv1RecurringTransfer';

export type vegacommandsv1Transfer = {
    /**
     * Amount to be taken from the source account, as an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset ID of the asset to be transferred.
     */
    asset?: string;
    /**
     * AMM key from which assets are to be transferred, if applicable.
     * The submitter of the transaction must be the owner of this AMM key.
     * If provided, the 'from_account_type' must be REWARDS_VESTED, and the asset in this account
     * must match the asset specified in the transfer.
     */
    from?: string;
    /**
     * Account type from which the funds of the party should be taken.
     */
    fromAccountType?: vegaAccountType;
    /**
     * Details of a one-off transfer that is executed once at a specified time.
     */
    oneOff?: vegacommandsv1OneOffTransfer;
    /**
     * Details of a transfer that is executed once every epoch until stopped.
     */
    recurring?: vegacommandsv1RecurringTransfer;
    /**
     * Reference to be attached to the transfer.
     */
    reference?: string;
    /**
     * Public key of the destination account.
     */
    to?: string;
    /**
     * Type of the destination account.
     */
    toAccountType?: vegaAccountType;
};


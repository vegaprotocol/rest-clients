/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1OneOffTransfer } from './commandsv1OneOffTransfer';
import type { commandsv1RecurringTransfer } from './commandsv1RecurringTransfer';
import type { vegaAccountType } from './vegaAccountType';

export type commandsv1Transfer = {
    /**
     * Amount to be taken from the source account, as an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset ID of the asset to be transferred.
     */
    asset?: string;
    /**
     * Account type from which the funds of the party should be taken.
     */
    fromAccountType?: vegaAccountType;
    /**
     * Details of a one-off transfer that is executed once at a specified time.
     */
    oneOff?: commandsv1OneOffTransfer;
    /**
     * Details of a transfer that is executed once every epoch until stopped.
     */
    recurring?: commandsv1RecurringTransfer;
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


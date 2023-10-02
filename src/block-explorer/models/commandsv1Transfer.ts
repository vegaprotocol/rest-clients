/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1OneOffTransfer } from './commandsv1OneOffTransfer';
import type { commandsv1RecurringTransfer } from './commandsv1RecurringTransfer';
import type { vegaAccountType } from './vegaAccountType';

export type commandsv1Transfer = {
    /**
     * Amount to be taken from the source account. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset ID of the asset to be transferred.
     */
    asset?: string;
    /**
     * Account type from which the funds of the party
     * should be taken.
     */
    fromAccountType?: vegaAccountType;
    oneOff?: commandsv1OneOffTransfer;
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


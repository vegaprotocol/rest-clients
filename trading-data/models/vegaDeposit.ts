/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDepositStatus } from './vegaDepositStatus';

export type vegaDeposit = {
    /**
     * Amount to be deposited. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Vega asset targeted by this deposit.
     */
    asset?: string;
    /**
     * Timestamp for when the deposit was created on the Vega network.
     */
    createdTimestamp?: string;
    /**
     * Timestamp for when the Vega account was updated with the deposit.
     */
    creditedTimestamp?: string;
    /**
     * Unique ID for the deposit.
     */
    id?: string;
    /**
     * Party ID of the user initiating the deposit.
     */
    partyId?: string;
    /**
     * Status of the deposit.
     */
    status?: vegaDepositStatus;
    /**
     * Hash of the transaction from the foreign chain.
     */
    txHash?: string;
};


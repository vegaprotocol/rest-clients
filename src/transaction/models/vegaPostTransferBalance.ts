/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountDetails } from './vegaAccountDetails';

export type vegaPostTransferBalance = {
    /**
     * Account relating to the transfer.
     */
    account?: vegaAccountDetails;
    /**
     * Balance relating to the transfer. This field is an unsigned integer scaled to the asset's decimal places.
     */
    balance?: string;
};


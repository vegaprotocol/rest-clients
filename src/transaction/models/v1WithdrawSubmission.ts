/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaWithdrawExt } from './vegaWithdrawExt';

/**
 * Command to instruct the network to process an asset withdrawal from the Vega network.
 * The process is specific to the destination foreign chain, for example, a withdrawal to Ethereum will generate signatures
 * that allow funds to be taken across the bridge.
 */
export type v1WithdrawSubmission = {
    /**
     * Amount to be withdrawn, as an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset to be withdrawn.
     */
    asset?: string;
    /**
     * Details specific to the foreign chain, such as the receiver address.
     */
    ext?: vegaWithdrawExt;
};


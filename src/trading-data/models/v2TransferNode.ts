/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1TransferFees } from './v1TransferFees';
import type { vegaeventsv1Transfer } from './vegaeventsv1Transfer';

export type v2TransferNode = {
    /**
     * Fees paid for this transfer.
     */
    fees?: Array<v1TransferFees>;
    /**
     * Data relating to a transfer that has been made.
     */
    transfer?: vegaeventsv1Transfer;
};


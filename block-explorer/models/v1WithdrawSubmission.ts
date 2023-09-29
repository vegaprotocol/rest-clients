/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaWithdrawExt } from './vegaWithdrawExt';

export type v1WithdrawSubmission = {
    /**
     * Amount to be withdrawn. This field is an unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Asset to be withdrawn.
     */
    asset?: string;
    /**
     * Foreign chain specifics.
     */
    ext?: vegaWithdrawExt;
};


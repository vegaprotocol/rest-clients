/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AccountBalance } from './v2AccountBalance';

export type v2AccountSnapshotPage = {
    /**
     * List of account balances.
     */
    accounts?: Array<v2AccountBalance>;
    /**
     * Indicator if the current page is the last one or not.
     */
    lastPage?: boolean;
};


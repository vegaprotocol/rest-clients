/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AccountSnapshotPage } from './v2AccountSnapshotPage';
import type { v2AccountUpdates } from './v2AccountUpdates';

/**
 * Response that is received when subscribing to a stream of accounts.
 */
export type v2ObserveAccountsResponse = {
    /**
     * 'Initial image' snapshot containing current account balances.
     */
    snapshot?: v2AccountSnapshotPage;
    /**
     * List of account updates in the last block.
     */
    updates?: v2AccountUpdates;
};


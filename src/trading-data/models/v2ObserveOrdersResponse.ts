/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2OrderSnapshotPage } from './v2OrderSnapshotPage';
import type { v2OrderUpdates } from './v2OrderUpdates';

/**
 * Response that is received from an orders subscription.
 */
export type v2ObserveOrdersResponse = {
    /**
     * An 'initial image' snapshot containing current live orders.
     */
    snapshot?: v2OrderSnapshotPage;
    /**
     * List of order updates in the last block.
     */
    updates?: v2OrderUpdates;
};


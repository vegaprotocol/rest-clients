/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaOrder } from './vegaOrder';

/**
 * 'Initial image' of live orders, may be sent over multiple response messages.
 */
export type v2OrderSnapshotPage = {
    /**
     * Indicator if the last page is reached or not.
     */
    lastPage?: boolean;
    /**
     * List of order data parts.
     */
    orders?: Array<vegaOrder>;
};


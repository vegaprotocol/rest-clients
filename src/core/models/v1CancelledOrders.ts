/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1CancelledOrders = {
    /**
     * Market ID for the event.
     */
    marketId?: string;
    /**
     * The order IDs that were cancelled.
     */
    orderIds?: Array<string>;
    /**
     * The ID of the party which cancelled the orders.
     */
    partyId?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A command that instructs the network to cancel orders, active or partially filled, that were previously submitted by the sender of this transaction.
 * It is not possible to cancel another party's order with this command.
 */
export type v1OrderCancellation = {
    /**
     * Restrict cancellations to those submitted to the given market. If not set, all stop orders across all markets will be cancelled.
     */
    marketId?: string;
    /**
     * Restrict cancellations to an order with the given ID. If set, then a market ID must also be provided.
     */
    orderId?: string;
};


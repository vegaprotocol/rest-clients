/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A command that instructs the network to cancel untriggered stop orders that were submitted by the sender of this transaction.
 * If any cancelled stop order is part of an OCO, both stop orders will be cancelled.
 * It is not possible to cancel another party's stop orders with this command.
 */
export type v1StopOrdersCancellation = {
    /**
     * Restrict cancellations to those submitted to the given market. If not set, all stop orders across all markets will be cancelled.
     */
    marketId?: string;
    /**
     * Restrict cancellations to a stop order with the given ID. If set, then a market ID must also be provided.
     */
    stopOrderId?: string;
};


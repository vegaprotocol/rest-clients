/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Liquidation price estimate for either only the current open volume and position given some or all buy orders get filled, or position given some or all sell orders get filled.
 */
export type v2LiquidationPrice = {
    /**
     * Liquidation price assuming buy orders start getting filled.
     */
    includingBuyOrders?: string;
    /**
     * Liquidation price assuming sell orders start getting filled.
     */
    includingSellOrders?: string;
    /**
     * Liquidation price for current open volume ignoring any active orders.
     */
    openVolumeOnly?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaFee } from './vegaFee';
import type { vegaSide } from './vegaSide';
import type { vegaTradeType } from './vegaTradeType';

export type vegaTrade = {
    /**
     * Direction of the aggressive party e.g. SIDE_BUY or SIDE_SELL.
     */
    aggressor?: vegaSide;
    /**
     * Price for the trade using asset decimals, as opposed to market decimals used
     * in the price field. This is only used in trade events for position updates.
     */
    assetPrice?: string;
    /**
     * Identifier of the order from the buy side.
     */
    buyOrder?: string;
    /**
     * Unique party ID for the buyer.
     */
    buyer?: string;
    /**
     * Auction batch number that the buy side order was placed in.
     */
    buyerAuctionBatch?: string;
    /**
     * Fee amount charged to the buyer party for the trade.
     */
    buyerFee?: vegaFee;
    /**
     * Unique ID for the trade.
     */
    id?: string;
    /**
     * Market ID on which the trade occurred.
     */
    marketId?: string;
    /**
     * Price for the trade, the price is an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    price?: string;
    /**
     * Identifier of the order from the sell side.
     */
    sellOrder?: string;
    /**
     * Unique party ID for the seller.
     */
    seller?: string;
    /**
     * Auction batch number that the sell side order was placed in.
     */
    sellerAuctionBatch?: string;
    /**
     * Fee amount charged to the seller party for the trade.
     */
    sellerFee?: vegaFee;
    /**
     * Size filled for the trade.
     */
    size?: string;
    /**
     * Timestamp in Unix nanoseconds for when the trade occurred.
     */
    timestamp?: string;
    /**
     * Type for the trade.
     */
    type?: vegaTradeType;
};


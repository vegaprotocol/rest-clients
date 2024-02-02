/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MarketTradingMode } from './MarketTradingMode';
import type { vegaAuctionTrigger } from './vegaAuctionTrigger';
import type { vegaCompositePriceType } from './vegaCompositePriceType';
import type { vegaLiquidityProviderFeeShare } from './vegaLiquidityProviderFeeShare';
import type { vegaLiquidityProviderSLA } from './vegaLiquidityProviderSLA';
import type { vegaMarketState } from './vegaMarketState';
import type { vegaPriceMonitoringBounds } from './vegaPriceMonitoringBounds';
import type { vegaProductData } from './vegaProductData';

export type vegaMarketData = {
    /**
     * Time in seconds until the end of the auction (zero if currently not in auction period).
     */
    auctionEnd?: string;
    /**
     * Time until next auction, or start time of the current auction if market is in auction period.
     */
    auctionStart?: string;
    /**
     * Highest price level on an order book for buy orders, as an unsigned integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    bestBidPrice?: string;
    /**
     * Aggregated volume being bid at the best bid price, as an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market is configured to 5 decimal places.
     */
    bestBidVolume?: string;
    /**
     * Lowest price level on an order book for offer orders. This field is an unsigned integer scaled to the market's decimal places.
     */
    bestOfferPrice?: string;
    /**
     * Aggregated volume being offered at the best offer price, as an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market is configured to 5 decimal places.
     */
    bestOfferVolume?: string;
    /**
     * Highest price on the order book for buy orders not including pegged orders.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    bestStaticBidPrice?: string;
    /**
     * Total volume at the best static bid price excluding pegged orders.
     */
    bestStaticBidVolume?: string;
    /**
     * Lowest price on the order book for sell orders not including pegged orders.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    bestStaticOfferPrice?: string;
    /**
     * Total volume at the best static offer price, excluding pegged orders.
     */
    bestStaticOfferVolume?: string;
    /**
     * When a market auction is extended, this field indicates what caused the extension.
     */
    extensionTrigger?: vegaAuctionTrigger;
    /**
     * Indicative price (zero if not in auction). This field is an unsigned scaled to the market's decimal places.
     */
    indicativePrice?: string;
    /**
     * Indicative volume (zero if not in auction).
     */
    indicativeVolume?: string;
    /**
     * Last traded price of the market. This field is an unsigned integer scaled to the market's decimal places.
     */
    lastTradedPrice?: string;
    /**
     * Equity like share of liquidity fee for each liquidity provider.
     */
    liquidityProviderFeeShare?: Array<vegaLiquidityProviderFeeShare>;
    /**
     * SLA performance for each liquidity provider.
     */
    liquidityProviderSla?: Array<vegaLiquidityProviderSLA>;
    /**
     * Mark price, as an unsigned integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    markPrice?: string;
    /**
     * The method used for calculating the mark price.
     */
    markPriceType?: vegaCompositePriceType;
    market?: string;
    /**
     * Market growth at the last market time window.
     */
    marketGrowth?: string;
    /**
     * Current state of the market.
     */
    marketState?: vegaMarketState;
    /**
     * Current trading mode for the market.
     */
    marketTradingMode?: MarketTradingMode;
    /**
     * Market value proxy.
     */
    marketValueProxy?: string;
    /**
     * Arithmetic average of the best bid price and best offer price, as an integer, for example `123456` is a correctly
     * formatted price of `1.23456` assuming market configured to 5 decimal places.
     */
    midPrice?: string;
    /**
     * Time in Unix nanoseconds when the next mark-to-market calculation will occur.
     */
    nextMarkToMarket?: string;
    /**
     * Time in Unix nanoseconds when the market will next submit a trade to reduce its position.
     */
    nextNetworkCloseout?: string;
    /**
     * Sum of the size of all positions greater than zero on the market.
     */
    openInterest?: string;
    /**
     * One or more price monitoring bounds for the current timestamp.
     */
    priceMonitoringBounds?: Array<vegaPriceMonitoringBounds>;
    /**
     * Data related to the particular product type of the market.
     */
    productData?: vegaProductData;
    /**
     * Arithmetic average of the best static bid price and best static offer price.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    staticMidPrice?: string;
    /**
     * Available stake for the given market. This field is an unsigned integer scaled to the settlement asset's decimal places.
     */
    suppliedStake?: string;
    /**
     * Targeted stake for the given market. This field is an unsigned integer scaled to the settlement asset's decimal places.
     */
    targetStake?: string;
    /**
     * Timestamp in Unix nanoseconds at which this mark price was relevant.
     */
    timestamp?: string;
    /**
     * When a market is in an auction trading mode, this field indicates what triggered the auction.
     */
    trigger?: vegaAuctionTrigger;
};


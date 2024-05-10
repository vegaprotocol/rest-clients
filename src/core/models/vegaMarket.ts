/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MarketTradingMode } from './MarketTradingMode';
import type { vegaAuctionDuration } from './vegaAuctionDuration';
import type { vegaCompositePriceConfiguration } from './vegaCompositePriceConfiguration';
import type { vegaFees } from './vegaFees';
import type { vegaLiquidationStrategy } from './vegaLiquidationStrategy';
import type { vegaLiquidityMonitoringParameters } from './vegaLiquidityMonitoringParameters';
import type { vegaLiquiditySLAParameters } from './vegaLiquiditySLAParameters';
import type { vegaMarketState } from './vegaMarketState';
import type { vegaMarketTimestamps } from './vegaMarketTimestamps';
import type { vegaPriceMonitoringSettings } from './vegaPriceMonitoringSettings';
import type { vegaTradableInstrument } from './vegaTradableInstrument';

export type vegaMarket = {
    /**
     * Number of decimal places that a price must be shifted by in order to get a
     * correct price denominated in the currency of the market, for example:
     * `realPrice = price / 10^decimalPlaces`. On spot markets, also called 'size decimal places'.
     */
    decimalPlaces?: string;
    /**
     * Fees configuration that apply to the market.
     */
    fees?: vegaFees;
    /**
     * Unique ID for the market.
     */
    id?: string;
    /**
     * The fraction of the parent market's insurance pool that this market inherits; range 0 through 1.
     */
    insurancePoolFraction?: string;
    /**
     * Linear slippage factor is used to cap the slippage component of maintenance margin - it is applied to the slippage volume.
     */
    linearSlippageFactor?: string;
    /**
     * Liquidation strategy used by this market.
     */
    liquidationStrategy?: vegaLiquidationStrategy;
    /**
     * LiquidityMonitoringParameters for the market.
     */
    liquidityMonitoringParameters?: vegaLiquidityMonitoringParameters;
    /**
     * Liquidity SLA parameters for the market.
     */
    liquiditySlaParams?: vegaLiquiditySLAParameters;
    /**
     * Percentage move up and down from the mid price which specifies the range of
     * price levels over which automated liquidity provisions will be deployed.
     */
    lpPriceRange?: string;
    /**
     * Mark price calculation configuration.
     */
    markPriceConfiguration?: vegaCompositePriceConfiguration;
    /**
     * Timestamps for when the market state changes.
     */
    marketTimestamps?: vegaMarketTimestamps;
    /**
     * Auction duration specifies how long the opening auction will run (minimum
     * duration and optionally a minimum traded volume).
     */
    openingAuction?: vegaAuctionDuration;
    parentMarketId?: string;
    /**
     * The number of decimal places for a position.
     * On spot markets, used for order size, also known as 'size decimal places'.
     */
    positionDecimalPlaces?: string;
    /**
     * PriceMonitoringSettings for the market.
     */
    priceMonitoringSettings?: vegaPriceMonitoringSettings;
    /**
     * Quadratic slippage factor is used to cap the slippage component of maintenance margin - it is applied to the square of the slippage volume.
     */
    quadraticSlippageFactor?: string;
    /**
     * Current state of the market.
     */
    state?: vegaMarketState;
    /**
     * ID of the market that succeeds this market if it exists. This will be populated by the system when the successor market is enabled.
     */
    successorMarketId?: string;
    tickSize?: string;
    /**
     * Tradable instrument configuration.
     */
    tradableInstrument?: vegaTradableInstrument;
    /**
     * Current mode of execution of the market.
     */
    tradingMode?: MarketTradingMode;
};


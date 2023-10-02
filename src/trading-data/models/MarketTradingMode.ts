/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - TRADING_MODE_UNSPECIFIED: Default value, this is invalid
 * - TRADING_MODE_CONTINUOUS: Normal trading
 * - TRADING_MODE_BATCH_AUCTION: Auction trading (FBA)
 * - TRADING_MODE_OPENING_AUCTION: Opening auction
 * - TRADING_MODE_MONITORING_AUCTION: Auction triggered by monitoring
 * - TRADING_MODE_NO_TRADING: No trading is allowed
 * - TRADING_MODE_SUSPENDED_VIA_GOVERNANCE: Special auction mode triggered via governance
 */
export enum MarketTradingMode {
    TRADING_MODE_UNSPECIFIED = 'TRADING_MODE_UNSPECIFIED',
    TRADING_MODE_CONTINUOUS = 'TRADING_MODE_CONTINUOUS',
    TRADING_MODE_BATCH_AUCTION = 'TRADING_MODE_BATCH_AUCTION',
    TRADING_MODE_OPENING_AUCTION = 'TRADING_MODE_OPENING_AUCTION',
    TRADING_MODE_MONITORING_AUCTION = 'TRADING_MODE_MONITORING_AUCTION',
    TRADING_MODE_NO_TRADING = 'TRADING_MODE_NO_TRADING',
    TRADING_MODE_SUSPENDED_VIA_GOVERNANCE = 'TRADING_MODE_SUSPENDED_VIA_GOVERNANCE',
}

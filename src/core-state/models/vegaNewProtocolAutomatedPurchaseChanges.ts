/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';
import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaDataSourceSpecToAutomatedPurchaseBinding } from './vegaDataSourceSpecToAutomatedPurchaseBinding';
import type { vegaSpecBindingForCompositePrice } from './vegaSpecBindingForCompositePrice';

export type vegaNewProtocolAutomatedPurchaseChanges = {
    auctionDuration?: string;
    auctionSchedule?: vegaDataSourceDefinition;
    /**
     * A time based oracle for when an observation will be taken of the balance of the source account. This will emit an event notifying of the balance planned to exchange, along with storing this value. When an auction occurs, the latest reading for this value will be used for the volume to trade, rather than the full balance of the account.
     */
    auctionVolumeSnapshotSchedule?: vegaDataSourceDefinition;
    automatedPurchaseSpecBinding?: vegaDataSourceSpecToAutomatedPurchaseBinding;
    /**
     * Timestamp in Unix seconds, when the automated purchase is stopped. If an auction is in action it will be removed when the auction is finished.
     */
    expiryTimestamp?: string;
    from?: string;
    fromAccountType?: vegaAccountType;
    marketId?: string;
    /**
     * Maximum number of tokens to be sold (specified in asset decimals). If more than this are available in the account at the last snapshot before auction, this maximum value will be used instead, and the remainder will be rolled over to the next scheduled auction.
     */
    maximumAuctionSize?: string;
    /**
     * Minimum number of tokens to be sold (specified in asset decimals). If less than this are available in the account at the last snapshot before auction, no auction will occur and the balance will roll over to the next scheduled auction.
     */
    minimumAuctionSize?: string;
    oracleOffsetFactor?: string;
    oraclePriceStalenessTolerance?: string;
    priceOracle?: vegaDataSourceDefinition;
    priceOracleSpecBinding?: vegaSpecBindingForCompositePrice;
    toAccountType?: vegaAccountType;
};


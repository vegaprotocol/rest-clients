/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaChainStatus } from './vegaChainStatus';

export type v1Statistics = {
    accountSubscriptions?: number;
    appVersion?: string;
    appVersionHash?: string;
    averageOrdersPerBlock?: string;
    averageTxBytes?: string;
    backlogLength?: string;
    blockDuration?: string;
    blockHash?: string;
    blockHeight?: string;
    candleSubscriptions?: number;
    chainId?: string;
    chainVersion?: string;
    currentTime?: string;
    epochExpiryTime?: string;
    epochSeq?: string;
    epochStartTime?: string;
    eventCount?: string;
    eventsPerSecond?: string;
    genesisTime?: string;
    marketDataSubscriptions?: number;
    marketDepthSubscriptions?: number;
    marketDepthUpdatesSubscriptions?: number;
    orderSubscriptions?: number;
    ordersPerSecond?: string;
    positionsSubscriptions?: number;
    status?: vegaChainStatus;
    totalAmendOrder?: string;
    totalCancelOrder?: string;
    totalCreateOrder?: string;
    totalMarkets?: string;
    totalOrders?: string;
    totalPeers?: string;
    totalTrades?: string;
    tradeSubscriptions?: number;
    tradesPerSecond?: string;
    txPerBlock?: string;
    uptime?: string;
    vegaTime?: string;
};


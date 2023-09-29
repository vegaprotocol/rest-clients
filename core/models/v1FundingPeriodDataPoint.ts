/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FundingPeriodDataPointSource } from './FundingPeriodDataPointSource';

/**
 * Event notifying a data point for a funding period.
 */
export type v1FundingPeriodDataPoint = {
    /**
     * Origin of the data point.
     */
    dataPointType?: FundingPeriodDataPointSource;
    /**
     * Market ID which the data point relates to.
     */
    marketId?: string;
    /**
     * Price of the asset as seen by this data point.
     */
    price?: string;
    /**
     * Sequence number of the funding period this data point belongs to.
     */
    seq?: string;
    /**
     * Timestamp in Unix nanoseconds of when the data point was received.
     */
    timestamp?: string;
    /**
     * The TWAP for this source with this data-point added.
     */
    twap?: string;
};


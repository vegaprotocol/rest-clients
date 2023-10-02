/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Event notifying on the details of a funding interval for a perpetuals market.
 */
export type v1FundingPeriod = {
    /**
     * Time in Unix nanoseconds when the funding period ended.
     */
    end?: string;
    /**
     * TWAP for this period based on the external data-points.
     */
    externalTwap?: string;
    /**
     * Funding payment for this period as the difference between the time-weighted average price of the external and internal data point.
     */
    fundingPayment?: string;
    /**
     * Percentage difference between the time-weighted average price of the external and internal data point.
     */
    fundingRate?: string;
    /**
     * TWAP for this period based on the internal data-points.
     */
    internalTwap?: string;
    /**
     * ID of the market for which this funding period relates to.
     */
    marketId?: string;
    /**
     * Sequence number of the funding period.
     */
    seq?: string;
    /**
     * Time in Unix nanoseconds when the funding period started.
     */
    start?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents market data specific to a perpetual market.
 */
export type vegaPerpetualData = {
    /**
     * Time-weighted-average the external data points for the in-progress funding period.
     */
    externalTwap?: string;
    /**
     * Current funding payment for the in-progress funding period.
     */
    fundingPayment?: string;
    /**
     * Current funding rate for the in-progress funding period.
     */
    fundingRate?: string;
    /**
     * Time-weighted-average the internal data-points for the in-progress funding period.
     */
    internalTwap?: string;
};


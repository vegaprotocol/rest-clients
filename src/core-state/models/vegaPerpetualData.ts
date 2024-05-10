/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaCompositePriceState } from './vegaCompositePriceState';
import type { vegaCompositePriceType } from './vegaCompositePriceType';

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
     * The internal composite price used for perpetual markets.
     */
    internalCompositePrice?: string;
    /**
     * State of the internal composite price.
     */
    internalCompositePriceState?: vegaCompositePriceState;
    /**
     * The method used for calculating the internal composite price, for perpetual markets only.
     */
    internalCompositePriceType?: vegaCompositePriceType;
    /**
     * Time-weighted-average the internal data-points for the in-progress funding period.
     */
    internalTwap?: string;
    /**
     * The next time the internal composite price is calculated for the perpetual market, in Unix nanoseconds.
     */
    nextInternalCompositePriceCalc?: string;
    seqNum?: string;
    startTime?: string;
    /**
     * Last seen value of the settlement oracle.
     */
    underlyingIndexPrice?: string;
};


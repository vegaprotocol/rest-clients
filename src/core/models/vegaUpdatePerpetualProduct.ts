/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaCompositePriceConfiguration } from './vegaCompositePriceConfiguration';
import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaDataSourceSpecToPerpetualBinding } from './vegaDataSourceSpecToPerpetualBinding';

export type vegaUpdatePerpetualProduct = {
    /**
     * Lower bound for the clamp function used as part of the funding rate calculation, in the range [-1, 1].
     */
    clampLowerBound?: string;
    /**
     * Upper bound for the clamp function used as part of the funding rate calculation, in the range [-1, 1].
     */
    clampUpperBound?: string;
    /**
     * Binding between the data source spec and the settlement data.
     */
    dataSourceSpecBinding?: vegaDataSourceSpecToPerpetualBinding;
    /**
     * Data source spec describing the data source for settlement.
     */
    dataSourceSpecForSettlementData?: vegaDataSourceDefinition;
    /**
     * Data source spec describing the data source for settlement schedule.
     */
    dataSourceSpecForSettlementSchedule?: vegaDataSourceDefinition;
    /**
     * Lower bound for the funding-rate such that the funding-rate will never be lower than this value.
     */
    fundingRateLowerBound?: string;
    /**
     * Factor applied to funding-rates. This scales the impact that spot price deviations have on funding payments.
     */
    fundingRateScalingFactor?: string;
    /**
     * Upper bound for the funding-rate such that the funding-rate will never be higher than this value.
     */
    fundingRateUpperBound?: string;
    /**
     * Continuously compounded interest rate used in funding rate calculation, in the range [-1, 1].
     */
    interestRate?: string;
    /**
     * Configuration for the internal composite price used in funding payment calculation.
     */
    internalCompositePriceConfiguration?: vegaCompositePriceConfiguration;
    /**
     * Controls how much the upcoming funding payment liability contributes to party's margin, in the range [0, 1].
     */
    marginFundingFactor?: string;
    /**
     * Human-readable name/abbreviation of the quote name.
     */
    quoteName?: string;
};


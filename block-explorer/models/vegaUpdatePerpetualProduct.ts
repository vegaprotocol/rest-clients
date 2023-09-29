/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
     * Continuously compounded interest rate used in funding rate calculation, in the range [-1, 1].
     */
    interestRate?: string;
    /**
     * Controls how much the upcoming funding payment liability contributes to party's margin, in the range [0, 1].
     */
    marginFundingFactor?: string;
    /**
     * Human-readable name/abbreviation of the quote name.
     */
    quoteName?: string;
};


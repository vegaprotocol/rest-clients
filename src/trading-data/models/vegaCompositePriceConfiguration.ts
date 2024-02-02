/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaCompositePriceType } from './vegaCompositePriceType';
import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaSpecBindingForCompositePrice } from './vegaSpecBindingForCompositePrice';

/**
 * Mark price configuration parameters.
 */
export type vegaCompositePriceConfiguration = {
    /**
     * Cash amount, in asset decimals, used for the calculation of the mark price from the order book.
     */
    cashAmount?: string;
    /**
     * Which method is used for the calculation of the composite price for the market.
     */
    compositePriceType?: vegaCompositePriceType;
    /**
     * Additional price sources to be used for index price calculation.
     */
    dataSourcesSpec?: Array<vegaDataSourceDefinition>;
    dataSourcesSpecBinding?: Array<vegaSpecBindingForCompositePrice>;
    /**
     * Decay power used for the calculation of mark price.
     */
    decayPower?: string;
    /**
     * Decay weight used for calculation of mark price.
     */
    decayWeight?: string;
    /**
     * For how long a price source is considered valid. One entry for each data source
     * such that the first is for the trade based mark price, the second is for the book based price
     * the third is for the first oracle, followed by more oracle data source staleness tolerance.
     */
    sourceStalenessTolerance?: Array<string>;
    /**
     * Weights for each composite price data source.
     */
    sourceWeights?: Array<string>;
};


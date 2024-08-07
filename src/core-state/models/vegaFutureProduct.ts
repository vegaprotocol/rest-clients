/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaDataSourceSpecToFutureBinding } from './vegaDataSourceSpecToFutureBinding';
import type { vegaFutureCap } from './vegaFutureCap';

export type vegaFutureProduct = {
    /**
     * If set, this product creates a capped future market.
     */
    cap?: vegaFutureCap;
    /**
     * Binding between the data source spec and the settlement data.
     */
    dataSourceSpecBinding?: vegaDataSourceSpecToFutureBinding;
    /**
     * Data source spec describing the data source for settlement.
     */
    dataSourceSpecForSettlementData?: vegaDataSourceDefinition;
    /**
     * The external data source spec describing the data source of trading termination.
     */
    dataSourceSpecForTradingTermination?: vegaDataSourceDefinition;
    /**
     * Product quote name.
     */
    quoteName?: string;
    /**
     * Asset ID for the product's settlement asset.
     */
    settlementAsset?: string;
};


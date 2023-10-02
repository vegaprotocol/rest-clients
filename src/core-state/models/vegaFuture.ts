/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceSpec } from './vegaDataSourceSpec';
import type { vegaDataSourceSpecToFutureBinding } from './vegaDataSourceSpecToFutureBinding';

export type vegaFuture = {
    /**
     * Binding between the data spec and the data source.
     */
    dataSourceSpecBinding?: vegaDataSourceSpecToFutureBinding;
    /**
     * Data source specification that describes the settlement data source filter.
     */
    dataSourceSpecForSettlementData?: vegaDataSourceSpec;
    /**
     * Data source specification that describes the trading termination data source filter.
     */
    dataSourceSpecForTradingTermination?: vegaDataSourceSpec;
    /**
     * Quote name of the instrument.
     */
    quoteName?: string;
    /**
     * Underlying asset for the future.
     */
    settlementAsset?: string;
};


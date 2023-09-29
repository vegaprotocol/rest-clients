/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaDataSourceSpecToFutureBinding } from './vegaDataSourceSpecToFutureBinding';

export type vegaUpdateFutureProduct = {
    /**
     * The binding between the data source spec and the settlement data.
     */
    dataSourceSpecBinding?: vegaDataSourceSpecToFutureBinding;
    /**
     * The data source spec describing the data of settlement data.
     */
    dataSourceSpecForSettlementData?: vegaDataSourceDefinition;
    /**
     * The data source spec describing the data source for trading termination.
     */
    dataSourceSpecForTradingTermination?: vegaDataSourceDefinition;
    /**
     * Human-readable name/abbreviation of the quote name.
     */
    quoteName?: string;
};


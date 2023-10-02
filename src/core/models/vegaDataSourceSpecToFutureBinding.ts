/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaDataSourceSpecToFutureBinding = {
    /**
     * Name of the property in the source data that should be used as settlement data.
     * If it is set to "prices.BTC.value", then the Future will use the value of
     * this property as settlement data.
     */
    settlementDataProperty?: string;
    /**
     * Name of the property in the data source data that signals termination of trading.
     */
    tradingTerminationProperty?: string;
};


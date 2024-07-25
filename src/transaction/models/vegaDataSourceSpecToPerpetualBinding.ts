/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes which properties of the data source data is to be
 * used for settlement.
 */
export type vegaDataSourceSpecToPerpetualBinding = {
    /**
     * Name of the property in the source data that should be used for settlement data.
     * If it is set to "prices.BTC.value" for example, then the perpetual market will use the value of
     * this property to get settlement data.
     */
    settlementDataProperty?: string;
    /**
     * Name of the property in the source data that should be used to determine the perpetual's settlement schedule.
     */
    settlementScheduleProperty?: string;
};


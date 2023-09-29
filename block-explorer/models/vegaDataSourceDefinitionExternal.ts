/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceSpecConfiguration } from './vegaDataSourceSpecConfiguration';
import type { vegaEthCallSpec } from './vegaEthCallSpec';

/**
 * DataSourceDefinitionExternal is the top level object used for all external
 * data sources. It contains one of any of the defined `SourceType` variants.
 */
export type vegaDataSourceDefinitionExternal = {
    /**
     * Contains the data specification that is received from Ethereum sources.
     */
    ethOracle?: vegaEthCallSpec;
    oracle?: vegaDataSourceSpecConfiguration;
};


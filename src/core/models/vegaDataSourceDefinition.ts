/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceDefinitionExternal } from './vegaDataSourceDefinitionExternal';
import type { vegaDataSourceDefinitionInternal } from './vegaDataSourceDefinitionInternal';

/**
 * Represents the top level object that handles data sources.
 * Data source definition can be external or internal, with whatever
 * number of data sources are defined for each type in the child objects below.
 */
export type vegaDataSourceDefinition = {
    external?: vegaDataSourceDefinitionExternal;
    internal?: vegaDataSourceDefinitionInternal;
};


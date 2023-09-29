/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceDefinition } from './vegaDataSourceDefinition';
import type { vegaDataSourceSpecStatus } from './vegaDataSourceSpecStatus';

/**
 * Data source spec describes the data source base that a product or a risk
 * model wants to get from the data source engine. This message contains
 * additional information used by the API.
 */
export type vegaDataSourceSpec = {
    createdAt?: string;
    data?: vegaDataSourceDefinition;
    /**
     * Hash generated from the DataSpec data.
     */
    id?: string;
    status?: vegaDataSourceSpecStatus;
    updatedAt?: string;
};


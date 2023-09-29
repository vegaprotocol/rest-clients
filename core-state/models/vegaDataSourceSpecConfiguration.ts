/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Filter } from './v1Filter';
import type { v1Signer } from './v1Signer';

/**
 * All types of external data sources use the same configuration set for meeting
 * requirements in order for the data to be useful for Vega - valid signatures
 * and matching filters.
 */
export type vegaDataSourceSpecConfiguration = {
    /**
     * Filters describes which source data are considered of interest or not for
     * the product (or the risk model).
     */
    filters?: Array<v1Filter>;
    /**
     * Signers is the list of authorized signatures that signed the data for this
     * source. All the signatures in the data source data should be contained in
     * this external source. All the signatures in the data should be contained in
     * this list.
     */
    signers?: Array<v1Signer>;
};


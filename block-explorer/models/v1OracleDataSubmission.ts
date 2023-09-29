/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OracleDataSubmissionOracleSource } from './OracleDataSubmissionOracleSource';

export type v1OracleDataSubmission = {
    /**
     * Data provided by the data source
     * In the case of Open Oracle - it will be the entire object - it will contain messages, signatures and price data.
     */
    payload?: string;
    /**
     * Source from which the data is coming from. Must be base64 encoded.
     * Oracle data is a type of external data source data.
     */
    source?: OracleDataSubmissionOracleSource;
};


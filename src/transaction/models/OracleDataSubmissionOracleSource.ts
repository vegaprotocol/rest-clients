/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - ORACLE_SOURCE_UNSPECIFIED: Default value
 * - ORACLE_SOURCE_OPEN_ORACLE: Specifies that the payload will be base64 encoded JSON conforming to the Open Oracle standard.
 * - ORACLE_SOURCE_JSON: Specifies that the payload will be base64 encoded JSON, but does not specify the shape of the data.
 * - ORACLE_SOURCE_ETHEREUM: Specifies that the payload will be base64 encoded JSON conforming to the ETH standard.
 */
export enum OracleDataSubmissionOracleSource {
    ORACLE_SOURCE_UNSPECIFIED = 'ORACLE_SOURCE_UNSPECIFIED',
    ORACLE_SOURCE_OPEN_ORACLE = 'ORACLE_SOURCE_OPEN_ORACLE',
    ORACLE_SOURCE_JSON = 'ORACLE_SOURCE_JSON',
    ORACLE_SOURCE_ETHEREUM = 'ORACLE_SOURCE_ETHEREUM',
}

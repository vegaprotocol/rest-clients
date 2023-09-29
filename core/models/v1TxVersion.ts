/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Current supported version of the transaction inside the network.
 *
 * - TX_VERSION_UNSPECIFIED: Represents an unspecified or missing value from the input
 * - TX_VERSION_V2: This version requires the proof-of-work added to the transaction.
 * - TX_VERSION_V3: This version requires the chain ID to be appended in front of the input data
 * byte, with a `\0` delimiter.
 */
export enum v1TxVersion {
    TX_VERSION_UNSPECIFIED = 'TX_VERSION_UNSPECIFIED',
    TX_VERSION_V2 = 'TX_VERSION_V2',
    TX_VERSION_V3 = 'TX_VERSION_V3',
}

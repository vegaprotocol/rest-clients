/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Transaction versions to maintain backwards compatibility of transaction formats.
 *
 * - TX_VERSION_UNSPECIFIED: Transaction version is unspecified.
 * - TX_VERSION_V2: Transaction requires the addition of a proof-of-work calculation.
 * - TX_VERSION_V3: Transaction input data contains a prepended chain ID to prevent use of a single transaction across multiple networks.
 */
export enum v1TxVersion {
    TX_VERSION_UNSPECIFIED = 'TX_VERSION_UNSPECIFIED',
    TX_VERSION_V2 = 'TX_VERSION_V2',
    TX_VERSION_V3 = 'TX_VERSION_V3',
}

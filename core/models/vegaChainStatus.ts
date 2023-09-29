/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - CHAIN_STATUS_UNSPECIFIED: Default value, always invalid
 * - CHAIN_STATUS_DISCONNECTED: Blockchain is disconnected
 * - CHAIN_STATUS_REPLAYING: Blockchain is replaying historic transactions
 * - CHAIN_STATUS_CONNECTED: Blockchain is connected and receiving transactions
 */
export enum vegaChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 'CHAIN_STATUS_UNSPECIFIED',
    CHAIN_STATUS_DISCONNECTED = 'CHAIN_STATUS_DISCONNECTED',
    CHAIN_STATUS_REPLAYING = 'CHAIN_STATUS_REPLAYING',
    CHAIN_STATUS_CONNECTED = 'CHAIN_STATUS_CONNECTED',
}

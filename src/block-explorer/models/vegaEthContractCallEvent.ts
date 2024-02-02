/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaEthContractCallEvent = {
    /**
     * Ethereum block height.
     */
    blockHeight?: string;
    /**
     * Ethereum block time in Unix seconds.
     */
    blockTime?: string;
    /**
     * Error message if the call failed.
     */
    error?: string;
    /**
     * Result of contract call, packed according to the ABI stored in the associated data source spec.
     */
    result?: string;
    /**
     * Source chain for this chain event.
     */
    sourceChainId?: string;
    /**
     * ID of the data source spec that triggered this contract call.
     */
    specId?: string;
};


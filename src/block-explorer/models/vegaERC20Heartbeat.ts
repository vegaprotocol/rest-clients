/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Heartbeat represents that the ERC20 bridge is being watched even though no events happened.
 */
export type vegaERC20Heartbeat = {
    blockHeight?: string;
    /**
     * Ethereum block time in Unix seconds.
     */
    blockTime?: string;
    contractAddress?: string;
    /**
     * Source chain for this chain event.
     */
    sourceChainId?: string;
};


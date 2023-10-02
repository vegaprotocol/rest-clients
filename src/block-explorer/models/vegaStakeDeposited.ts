/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaStakeDeposited = {
    /**
     * Amount deposited as an unsigned base 10 integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * Time at which the block was produced.
     * Will be used to inform the core at what time
     * the stake started to be available.
     */
    blockTime?: string;
    ethereumAddress?: string;
    /**
     * Hex encoded public key of the party receiving the stake deposit.
     */
    vegaPublicKey?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaStakeRemoved = {
    /**
     * Amount removed as a base 10 unsigned integer scaled to the asset's decimal places.
     */
    amount?: string;
    /**
     * The time at which the block was produced
     * will be used to inform the core at what time
     * the stake was made unavailable.
     */
    blockTime?: string;
    /**
     * Ethereum address of the user removing stake. This should be hex encoded with 0x prefix.
     */
    ethereumAddress?: string;
    /**
     * Hex encoded public key of the party from which to remove stake.
     */
    vegaPublicKey?: string;
};


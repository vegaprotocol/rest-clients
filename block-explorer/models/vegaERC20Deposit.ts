/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaERC20Deposit = {
    /**
     * Amount to be deposited.
     */
    amount?: string;
    /**
     * Ethereum wallet that initiated the deposit.
     */
    sourceEthereumAddress?: string;
    /**
     * Vega party ID i.e. public key that is the target of the deposit.
     */
    targetPartyId?: string;
    /**
     * Vega network internal asset ID.
     */
    vegaAssetId?: string;
};


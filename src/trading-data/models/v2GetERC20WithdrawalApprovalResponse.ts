/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GetERC20WithdrawalApprovalResponse = {
    /**
     * Amount to be withdrawn.
     */
    amount?: string;
    /**
     * Address of asset on the bridged EVM chain.
     */
    assetSource?: string;
    /**
     * Creation timestamps.
     */
    creation?: string;
    /**
     * Nonce that uniquely identifies this signature bundle and prevents resubmission.
     */
    nonce?: string;
    /**
     * Signatures bundle as hex encoded data, prefixed with `0x`
     * e.g: 0x + sig1 + sig2 + ... + sixN.
     */
    signatures?: string;
    /**
     * Chain ID of the bridged EVM chain.
     */
    sourceChainId?: string;
    /**
     * Address, prefixed with `0x`, that will receive the withdrawn assets.
     */
    targetAddress?: string;
};


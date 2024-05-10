/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GetERC20SetAssetLimitsBundleResponse = {
    /**
     * Address of the asset on Ethereum.
     */
    assetSource?: string;
    /**
     * Lifetime limit deposit for this asset.
     */
    lifetimeLimit?: string;
    /**
     * Nonce that uniquely identifies this signature bundle and prevents resubmission.
     */
    nonce?: string;
    /**
     * Signatures bundle as hex encoded data, prefixed with `0x`
     * e.g: `0x + sig1 + sig2 + ... + sixN`.
     */
    signatures?: string;
    /**
     * Withdrawal threshold for this asset.
     */
    threshold?: string;
    /**
     * Asset ID for the underlying Vega asset.
     */
    vegaAssetId?: string;
};


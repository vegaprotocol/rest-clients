/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - NODE_SIGNATURE_KIND_UNSPECIFIED: Represents an unspecified or missing value from the input.
 * - NODE_SIGNATURE_KIND_ASSET_NEW: Represents a signature for a new asset allow-listing.
 * - NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL: Represents a signature for an asset withdrawal.
 * - NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED: Represents a signature for a new signer added to the erc20 multisig contract.
 * - NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED: Represents a signature for a signer removed from the erc20 multisig contract.
 * - NODE_SIGNATURE_KIND_ASSET_UPDATE: Represents a signature for an asset update allow-listing.
 */
export enum v1NodeSignatureKind {
    NODE_SIGNATURE_KIND_UNSPECIFIED = 'NODE_SIGNATURE_KIND_UNSPECIFIED',
    NODE_SIGNATURE_KIND_ASSET_NEW = 'NODE_SIGNATURE_KIND_ASSET_NEW',
    NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL = 'NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL',
    NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED = 'NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED',
    NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED = 'NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED',
    NODE_SIGNATURE_KIND_ASSET_UPDATE = 'NODE_SIGNATURE_KIND_ASSET_UPDATE',
}

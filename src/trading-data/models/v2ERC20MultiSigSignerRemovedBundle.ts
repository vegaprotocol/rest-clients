/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2ERC20MultiSigSignerRemovedBundle = {
    /**
     * ID of the EVM chain this signature bundle is valid for.
     */
    chainId?: string;
    /**
     * Epoch in which the validator was removed.
     */
    epochSeq?: string;
    /**
     * Nonce used in the signing operation.
     */
    nonce?: string;
    /**
     * Ethereum address of the signer to be removed.
     */
    oldSigner?: string;
    /**
     * Bundle of signatures from current validators to sign in the new signer.
     */
    signatures?: string;
    /**
     * Ethereum address of the submitter.
     */
    submitter?: string;
    /**
     * Unixnano timestamp for when the validator was added.
     */
    timestamp?: string;
};


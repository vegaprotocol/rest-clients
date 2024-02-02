/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeSignatureKind } from './v1NodeSignatureKind';

/**
 * Command that can be used by a validator to instruct the network to generate signatures to add or remove validators from the multisig-control contract.
 * Signatures can only be generated for validator nodes that have been promoted or demoted from the consensus validator set, and any attempt to generate signatures for another node will be rejected.
 * The generated signatures can only be submitted to the contract by the Ethereum addresses included in the command.
 */
export type v1IssueSignatures = {
    /**
     * What kind of signatures to generate, namely for whether a signer is being added or removed.
     */
    kind?: v1NodeSignatureKind;
    /**
     * Ethereum address which will submit the signatures to the smart contract.
     */
    submitter?: string;
    /**
     * Node ID of the validator node that will be signed in or out of the smart contract.
     */
    validatorNodeId?: string;
};


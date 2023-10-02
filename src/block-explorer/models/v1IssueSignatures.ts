/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeSignatureKind } from './v1NodeSignatureKind';

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


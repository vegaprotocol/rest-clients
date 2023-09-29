/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ProofOfWork } from './v1ProofOfWork';
import type { v1Signature } from './v1Signature';
import type { v1TxVersion } from './v1TxVersion';

/**
 * Represents a transaction to be sent to Vega.
 */
export type v1Transaction = {
    /**
     * Hex-encoded address of the sender. Not supported yet.
     */
    address?: string;
    /**
     * One of the set of Vega commands.
     * These bytes are should be built as follows:
     * chain_id_as_bytes + \0 character as delimiter + proto_marshalled_command.
     */
    inputData?: string;
    /**
     * Proof of work contains the random transaction id used by the client and the nonce.
     */
    pow?: v1ProofOfWork;
    /**
     * Hex-encoded public key of the sender.
     */
    pubKey?: string;
    /**
     * Signature of the input data.
     */
    signature?: v1Signature;
    /**
     * Version of the transaction, to be used in the future in case changes are implemented
     * to the transaction format.
     */
    version?: v1TxVersion;
};


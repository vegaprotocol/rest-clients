/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ProofOfWork } from './v1ProofOfWork';
import type { v1Signature } from './v1Signature';
import type { v1TxVersion } from './v1TxVersion';

/**
 * Transaction containing a command that can be sent to instruct the network to execute an action.
 * A transaction contains a byte string representation of the input data which must then be signed, with the signature added to the transaction.
 */
export type v1Transaction = {
    /**
     * Hex-encoded address of the sender. Not supported yet.
     */
    address?: string;
    /**
     * Protobuf message of type `InputData` marshalled into bytes. If the transaction version is V3 or higher then this bytes
     * string must be prepended with `chain_id_as_byes + \0`.
     */
    inputData?: string;
    /**
     * Proof-of-work containing the random transaction ID used by the client and the nonce.
     */
    pow?: v1ProofOfWork;
    /**
     * Hex-encoded public key of the sender.
     */
    pubKey?: string;
    /**
     * Signature of the input data field, signed by the sender of this transaction.
     */
    signature?: v1Signature;
    /**
     * Version of the transaction.
     */
    version?: v1TxVersion;
};


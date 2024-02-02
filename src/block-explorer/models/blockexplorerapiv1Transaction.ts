/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1InputData } from './v1InputData';
import type { v1ProofOfWork } from './v1ProofOfWork';
import type { v1Signature } from './v1Signature';
import type { v1TxVersion } from './v1TxVersion';

export type blockexplorerapiv1Transaction = {
    block?: string;
    code?: number;
    command?: v1InputData;
    /**
     * Timestamp when the transaction happened, using RFC3399 format.
     */
    createdAt?: string;
    cursor?: string;
    error?: string;
    hash?: string;
    index?: number;
    pow?: v1ProofOfWork;
    signature?: v1Signature;
    submitter?: string;
    type?: string;
    version?: v1TxVersion;
};


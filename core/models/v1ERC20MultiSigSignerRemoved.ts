/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ERC20MultiSigSignerRemovedSubmitter } from './v1ERC20MultiSigSignerRemovedSubmitter';

export type v1ERC20MultiSigSignerRemoved = {
    epochSeq?: string;
    /**
     * Nonce used.
     */
    nonce?: string;
    oldSigner?: string;
    signatureSubmitters?: Array<v1ERC20MultiSigSignerRemovedSubmitter>;
    timestamp?: string;
    validatorId?: string;
};


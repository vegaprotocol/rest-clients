/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1PoWBlockState = {
    blockHash?: string;
    blockHeight?: string;
    difficulty?: string;
    /**
     * This is the minimum required difficulty for the next transaction submitted on this block
     * if it is possible to submit more transactions on this block, otherwise nil.
     */
    expectedDifficulty?: string;
    hashFunction?: string;
    increasingDifficulty?: boolean;
    transactionsSeen?: string;
    txPerBlock?: string;
};


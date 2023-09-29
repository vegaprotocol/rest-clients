/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ERC20MultiSigSignerAddedBundle } from './v2ERC20MultiSigSignerAddedBundle';

/**
 * Signature bundle data that is to be added with the corresponding cursor.
 */
export type v2ERC20MultiSigSignerAddedBundleEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Signature bundle data to be added.
     */
    node?: v2ERC20MultiSigSignerAddedBundle;
};


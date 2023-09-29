/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ERC20MultiSigSignerRemovedBundle } from './v2ERC20MultiSigSignerRemovedBundle';

/**
 * Signature bundle data to be removed, with the corresponding cursor.
 */
export type v2ERC20MultiSigSignerRemovedBundleEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Signature bundle data to be added.
     */
    node?: v2ERC20MultiSigSignerRemovedBundle;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeSignatureKind } from './v1NodeSignatureKind';

/**
 * A validator command sent automatically containing a signature that can be used on a foreign chain to process an action.
 */
export type v1NodeSignature = {
    /**
     * ID of the resource that the signature relates to.
     */
    id?: string;
    /**
     * Kind of resource being signed.
     */
    kind?: v1NodeSignatureKind;
    /**
     * Signature generated by the node.
     */
    sig?: string;
};

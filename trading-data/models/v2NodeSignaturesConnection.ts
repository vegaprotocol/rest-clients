/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2NodeSignatureEdge } from './v2NodeSignatureEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of node signatures and corresponding page information.
 */
export type v2NodeSignaturesConnection = {
    /**
     * Page of node signatures and their corresponding cursors.
     */
    edges?: Array<v2NodeSignatureEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


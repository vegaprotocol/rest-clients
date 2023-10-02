/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ERC20MultiSigSignerAddedBundleEdge } from './v2ERC20MultiSigSignerAddedBundleEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2ERC20MultiSigSignerAddedConnection = {
    /**
     * Page of signature bundle data and their corresponding cursors.
     */
    edges?: Array<v2ERC20MultiSigSignerAddedBundleEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2ERC20MultiSigSignerRemovedBundleEdge } from './v2ERC20MultiSigSignerRemovedBundleEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of signature data items to be removed and corresponding page information.
 */
export type v2ERC20MultiSigSignerRemovedConnection = {
    /**
     * Page of signature bundle data and their corresponding cursors.
     */
    edges?: Array<v2ERC20MultiSigSignerRemovedBundleEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


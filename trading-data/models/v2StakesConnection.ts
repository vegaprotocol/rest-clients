/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2StakeLinkingEdge } from './v2StakeLinkingEdge';

/**
 * Page of stake data and corresponding page information.
 */
export type v2StakesConnection = {
    /**
     * Page of stake data and their corresponding cursors.
     */
    edges?: Array<v2StakeLinkingEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


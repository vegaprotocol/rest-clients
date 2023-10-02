/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2DelegationEdge } from './v2DelegationEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2DelegationsConnection = {
    /**
     * Page of delegations data and their corresponding cursors.
     */
    edges?: Array<v2DelegationEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


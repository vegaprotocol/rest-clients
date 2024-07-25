/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AMMEdge } from './v2AMMEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2AMMConnection = {
    /**
     * Page of AMM data and the corresponding cursors.
     */
    edges?: Array<v2AMMEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


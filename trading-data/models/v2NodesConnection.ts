/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2NodeEdge } from './v2NodeEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2NodesConnection = {
    /**
     * Page of node data and their corresponding cursors.
     */
    edges?: Array<v2NodeEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


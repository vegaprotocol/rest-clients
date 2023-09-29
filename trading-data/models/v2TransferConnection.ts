/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TransferEdge } from './v2TransferEdge';

export type v2TransferConnection = {
    /**
     * Page of transfers data and their corresponding cursors.
     */
    edges?: Array<v2TransferEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


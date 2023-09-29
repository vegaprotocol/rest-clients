/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2MarginEdge } from './v2MarginEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of margins data and corresponding page information.
 */
export type v2MarginConnection = {
    /**
     * Page of margins data and their corresponding cursors.
     */
    edges?: Array<v2MarginEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


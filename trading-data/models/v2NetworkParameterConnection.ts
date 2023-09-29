/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2NetworkParameterEdge } from './v2NetworkParameterEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2NetworkParameterConnection = {
    /**
     * Page of network parameters data and their corresponding cursors.
     */
    edges?: Array<v2NetworkParameterEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


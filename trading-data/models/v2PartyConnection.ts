/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2PartyEdge } from './v2PartyEdge';

/**
 * Page of parties data and corresponding page information.
 */
export type v2PartyConnection = {
    /**
     * Page of parties and their corresponding cursors.
     */
    edges?: Array<v2PartyEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


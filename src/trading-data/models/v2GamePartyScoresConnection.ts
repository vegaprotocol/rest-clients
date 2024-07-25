/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GamePartyScoresEdge } from './v2GamePartyScoresEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of party game scores data and corresponding page information.
 */
export type v2GamePartyScoresConnection = {
    /**
     * Page of orders and their corresponding cursors.
     */
    edges?: Array<v2GamePartyScoresEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


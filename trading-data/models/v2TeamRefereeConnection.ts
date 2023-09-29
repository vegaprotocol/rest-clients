/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TeamRefereeEdge } from './v2TeamRefereeEdge';

/**
 * Page of team referee data and corresponding page information.
 */
export type v2TeamRefereeConnection = {
    /**
     * Page of team referee data and their corresponding cursors.
     */
    edges?: Array<v2TeamRefereeEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


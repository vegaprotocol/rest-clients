/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2TeamEdge } from './v2TeamEdge';

/**
 * Page of team data and corresponding page information.
 */
export type v2TeamConnection = {
    /**
     * Page of team data and their corresponding cursors.
     */
    edges?: Array<v2TeamEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


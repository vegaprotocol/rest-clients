/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GameEdge } from './v2GameEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of games data and corresponding page information.
 */
export type v2GamesConnection = {
    /**
     * Page of games data and their corresponding cursors.
     */
    edges?: Array<v2GameEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


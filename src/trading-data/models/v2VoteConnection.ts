/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2VoteEdge } from './v2VoteEdge';

export type v2VoteConnection = {
    /**
     * Page of vote data and their corresponding cursors.
     */
    edges?: Array<v2VoteEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


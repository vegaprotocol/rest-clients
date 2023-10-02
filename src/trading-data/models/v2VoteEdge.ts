/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaVote } from './vegaVote';

/**
 * Votes data with the corresponding cursor.
 */
export type v2VoteEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data associated with a governance vote.
     */
    node?: vegaVote;
};


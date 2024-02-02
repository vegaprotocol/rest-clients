/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2Game } from './v2Game';

/**
 * Game information and corresponding cursor.
 */
export type v2GameEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Game data.
     */
    node?: v2Game;
};


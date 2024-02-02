/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PartyMarginMode } from './v2PartyMarginMode';

/**
 * Party margin mode information and corresponding cursor.
 */
export type v2PartyMarginModeEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Party margin mode data.
     */
    node?: v2PartyMarginMode;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaMarginLevels } from './vegaMarginLevels';

/**
 * Margin data with the corresponding cursor.
 */
export type v2MarginEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Margin levels data that satisfy a list margin levels request.
     */
    node?: vegaMarginLevels;
};


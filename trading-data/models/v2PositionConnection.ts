/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2PositionEdge } from './v2PositionEdge';

export type v2PositionConnection = {
    /**
     * Page of positions data and their corresponding cursors.
     */
    edges?: Array<v2PositionEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


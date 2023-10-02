/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2KeyRotationEdge } from './v2KeyRotationEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2KeyRotationConnection = {
    /**
     * Page of key rotation data and their corresponding cursors.
     */
    edges?: Array<v2KeyRotationEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


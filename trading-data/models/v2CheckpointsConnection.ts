/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2CheckpointEdge } from './v2CheckpointEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2CheckpointsConnection = {
    /**
     * Page of checkpoints data and their corresponding cursors.
     */
    edges?: Array<v2CheckpointEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


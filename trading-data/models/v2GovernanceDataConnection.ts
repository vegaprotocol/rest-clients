/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2GovernanceDataEdge } from './v2GovernanceDataEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2GovernanceDataConnection = {
    /**
     * Page of governance data and their corresponding cursors.
     */
    edges?: Array<v2GovernanceDataEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


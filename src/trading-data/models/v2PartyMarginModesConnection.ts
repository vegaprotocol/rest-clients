/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2PartyMarginModeEdge } from './v2PartyMarginModeEdge';

/**
 * Page of party margin modes data and corresponding page information.
 */
export type v2PartyMarginModesConnection = {
    /**
     * Page of party margin modes data and their corresponding cursors.
     */
    edges?: Array<v2PartyMarginModeEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AssetEdge } from './v2AssetEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2AssetsConnection = {
    /**
     * Page of assets data and their corresponding cursors.
     */
    edges?: Array<v2AssetEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


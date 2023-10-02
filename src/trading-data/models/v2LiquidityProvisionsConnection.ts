/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2LiquidityProvisionsEdge } from './v2LiquidityProvisionsEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2LiquidityProvisionsConnection = {
    /**
     * Page of liquidity provisions data and their corresponding cursors.
     */
    edges?: Array<v2LiquidityProvisionsEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


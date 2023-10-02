/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2LiquidityProviderEdge } from './v2LiquidityProviderEdge';
import type { v2PageInfo } from './v2PageInfo';

/**
 * Page of liquidity provider data and corresponding page information.
 */
export type v2LiquidityProviderConnection = {
    /**
     * Page of liquidity provider data.
     */
    edges?: Array<v2LiquidityProviderEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};


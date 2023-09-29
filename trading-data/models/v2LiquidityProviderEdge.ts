/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2LiquidityProvider } from './v2LiquidityProvider';

/**
 * Liquidity provider data with the corresponding cursor.
 */
export type v2LiquidityProviderEdge = {
    /**
     * Cursor that can be used to fetch further data.
     */
    cursor?: string;
    /**
     * Liquidity provider information returned by the API.
     */
    node?: v2LiquidityProvider;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaLiquidityProvision } from './vegaLiquidityProvision';

/**
 * Liquidity provision data with the corresponding cursor.
 */
export type v2LiquidityProvisionsEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Data corresponding to a liquidity provider's commitment.
     */
    node?: vegaLiquidityProvision;
};


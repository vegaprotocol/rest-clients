/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPeggedReference } from './vegaPeggedReference';

export type vegaLiquidityOrder = {
    /**
     * Offset/amount of units away for the order. This field is an unsigned integer scaled using the market's decimal places.
     */
    offset?: string;
    /**
     * Relative proportion of the commitment to be allocated at a price level.
     */
    proportion?: number;
    /**
     * Pegged reference point for the order.
     */
    reference?: vegaPeggedReference;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateMarginModeMode } from './UpdateMarginModeMode';

export type v1UpdateMarginMode = {
    marginFactor?: string;
    /**
     * Market to change margin mode for.
     */
    marketId?: string;
    /**
     * Margin mode to use.
     */
    mode?: UpdateMarginModeMode;
};


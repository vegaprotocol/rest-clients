/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBuiltinAsset } from './vegaBuiltinAsset';
import type { vegaERC20 } from './vegaERC20';

export type vegaAssetDetails = {
    /**
     * Vega built-in asset.
     */
    builtinAsset?: vegaBuiltinAsset;
    /**
     * Number of decimal / precision handled by this asset.
     */
    decimals?: string;
    /**
     * Ethereum ERC20 asset.
     */
    erc20?: vegaERC20;
    /**
     * Name of the asset (e.g: Great British Pound).
     */
    name?: string;
    /**
     * Minimum economically meaningful amount in the asset.
     */
    quantum?: string;
    /**
     * Symbol of the asset (e.g: GBP).
     */
    symbol?: string;
};


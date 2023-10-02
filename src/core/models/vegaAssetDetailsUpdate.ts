/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaERC20Update } from './vegaERC20Update';

/**
 * Changes to apply on an existing asset.
 */
export type vegaAssetDetailsUpdate = {
    /**
     * Ethereum ERC20 asset update.
     */
    erc20?: vegaERC20Update;
    /**
     * Minimum economically meaningful amount in the asset.
     */
    quantum?: string;
};


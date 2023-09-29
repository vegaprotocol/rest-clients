/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaERC20AssetDelist } from './vegaERC20AssetDelist';
import type { vegaERC20AssetLimitsUpdated } from './vegaERC20AssetLimitsUpdated';
import type { vegaERC20AssetList } from './vegaERC20AssetList';
import type { vegaERC20Deposit } from './vegaERC20Deposit';
import type { vegaERC20Withdrawal } from './vegaERC20Withdrawal';

export type vegaERC20Event = {
    /**
     * De-list an ERC20 asset.
     */
    assetDelist?: vegaERC20AssetDelist;
    /**
     * Update an ERC20 asset.
     */
    assetLimitsUpdated?: vegaERC20AssetLimitsUpdated;
    /**
     * List an ERC20 asset.
     */
    assetList?: vegaERC20AssetList;
    /**
     * Block in which the transaction was added.
     */
    block?: string;
    /**
     * Bridge operations has been resumed.
     */
    bridgeResumed?: boolean;
    /**
     * Bridge operations has been stopped.
     */
    bridgeStopped?: boolean;
    /**
     * Deposit ERC20 asset.
     */
    deposit?: vegaERC20Deposit;
    /**
     * Index of the log in the transaction.
     */
    index?: string;
    /**
     * Withdraw ERC20 asset.
     */
    withdrawal?: vegaERC20Withdrawal;
};


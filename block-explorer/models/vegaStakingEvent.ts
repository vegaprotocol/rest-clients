/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaStakeDeposited } from './vegaStakeDeposited';
import type { vegaStakeRemoved } from './vegaStakeRemoved';
import type { vegaStakeTotalSupply } from './vegaStakeTotalSupply';

/**
 * Event related to staking on the Vega network.
 */
export type vegaStakingEvent = {
    /**
     * Block in which the transaction was added.
     */
    block?: string;
    /**
     * Index of the log in the transaction.
     */
    index?: string;
    stakeDeposited?: vegaStakeDeposited;
    stakeRemoved?: vegaStakeRemoved;
    totalSupply?: vegaStakeTotalSupply;
};


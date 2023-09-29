/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBuiltinAssetEvent } from './vegaBuiltinAssetEvent';
import type { vegaERC20Event } from './vegaERC20Event';
import type { vegaERC20MultiSigEvent } from './vegaERC20MultiSigEvent';
import type { vegaEthContractCallEvent } from './vegaEthContractCallEvent';
import type { vegaStakingEvent } from './vegaStakingEvent';

export type v1ChainEvent = {
    /**
     * Built-in asset event.
     */
    builtin?: vegaBuiltinAssetEvent;
    contractCall?: vegaEthContractCallEvent;
    /**
     * Ethereum ERC20 event.
     */
    erc20?: vegaERC20Event;
    /**
     * Ethereum ERC20 multisig event.
     */
    erc20Multisig?: vegaERC20MultiSigEvent;
    /**
     * Arbitrary one-time integer used to prevent replay attacks.
     */
    nonce?: string;
    /**
     * Ethereum Staking event.
     */
    stakingEvent?: vegaStakingEvent;
    /**
     * Transaction ID of the transaction in which the events happened, usually a hash.
     */
    txId?: string;
};


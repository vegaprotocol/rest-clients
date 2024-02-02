/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaBuiltinAssetEvent } from './vegaBuiltinAssetEvent';
import type { vegaERC20Event } from './vegaERC20Event';
import type { vegaERC20MultiSigEvent } from './vegaERC20MultiSigEvent';
import type { vegaEthContractCallEvent } from './vegaEthContractCallEvent';
import type { vegaStakingEvent } from './vegaStakingEvent';

/**
 * A validator command sent automatically that provides information of events that have happened on foreign chains.
 */
export type v1ChainEvent = {
    /**
     * Built-in asset event.
     */
    builtin?: vegaBuiltinAssetEvent;
    /**
     * Ethereum contract call event.
     */
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
     * ID of the transaction on the foreign chain that caused the event.
     */
    txId?: string;
};


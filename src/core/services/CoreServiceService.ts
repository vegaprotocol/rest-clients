/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1CheckRawTransactionRequest } from '../models/v1CheckRawTransactionRequest';
import type { v1CheckRawTransactionResponse } from '../models/v1CheckRawTransactionResponse';
import type { v1CheckTransactionRequest } from '../models/v1CheckTransactionRequest';
import type { v1CheckTransactionResponse } from '../models/v1CheckTransactionResponse';
import type { v1GetSpamStatisticsResponse } from '../models/v1GetSpamStatisticsResponse';
import type { v1GetVegaTimeResponse } from '../models/v1GetVegaTimeResponse';
import type { v1LastBlockHeightResponse } from '../models/v1LastBlockHeightResponse';
import type { v1ObserveEventBusResponse } from '../models/v1ObserveEventBusResponse';
import type { v1StatisticsResponse } from '../models/v1StatisticsResponse';
import type { v1SubmitRawTransactionRequest } from '../models/v1SubmitRawTransactionRequest';
import type { v1SubmitRawTransactionResponse } from '../models/v1SubmitRawTransactionResponse';
import type { v1SubmitTransactionRequest } from '../models/v1SubmitTransactionRequest';
import type { v1SubmitTransactionResponse } from '../models/v1SubmitTransactionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CoreServiceService {

    /**
     * Blockchain height
     * Get the height of the last tendermint block
     * @returns v1LastBlockHeightResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceLastBlockHeight(): CancelablePromise<v1LastBlockHeightResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/blockchain/height',
        });
    }

    /**
     * Statistics
     * Get statistics on Vega
     * @returns v1StatisticsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceStatistics(): CancelablePromise<v1StatisticsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics',
        });
    }

    /**
     * Get Spam statistics
     * Get the spam statistics for a given party.
     * @param partyId Party ID whose statistics are requested
     * @returns v1GetSpamStatisticsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceGetSpamStatistics(
        partyId: string,
    ): CancelablePromise<v1GetSpamStatisticsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics/spam/{partyId}',
            path: {
                'partyId': partyId,
            },
        });
    }

    /**
     * Events subscription
     * Subscribe to a stream of events from the core
     * @param type One or more types of event, required field.
     *
     * - BUS_EVENT_TYPE_UNSPECIFIED: Default value, always invalid
     * - BUS_EVENT_TYPE_ALL: Events of ALL event types, used when filtering stream from event bus
     * - BUS_EVENT_TYPE_TIME_UPDATE: Event for blockchain time updates
     * - BUS_EVENT_TYPE_LEDGER_MOVEMENTS: Event for when a transfer happens internally, contains the transfer information
     * - BUS_EVENT_TYPE_POSITION_RESOLUTION: Event indicating position resolution has occurred
     * - BUS_EVENT_TYPE_ORDER: Event for order updates, both new and existing orders
     * - BUS_EVENT_TYPE_ACCOUNT: Event for account updates
     * - BUS_EVENT_TYPE_PARTY: Event for party updates
     * - BUS_EVENT_TYPE_TRADE: Event indicating a new trade has occurred
     * - BUS_EVENT_TYPE_MARGIN_LEVELS: Event indicating margin levels have changed for a party
     * - BUS_EVENT_TYPE_PROPOSAL: Event for proposal updates (for governance)
     * - BUS_EVENT_TYPE_VOTE: Event indicating a new vote has occurred (for governance)
     * - BUS_EVENT_TYPE_MARKET_DATA: Event for market data updates
     * - BUS_EVENT_TYPE_NODE_SIGNATURE: Event for a new signature for a Vega node
     * - BUS_EVENT_TYPE_LOSS_SOCIALIZATION: Event indicating loss socialisation occurred for a party
     * - BUS_EVENT_TYPE_SETTLE_POSITION: Event for when a position is being settled
     * - BUS_EVENT_TYPE_SETTLE_DISTRESSED: Event for when a position is distressed
     * - BUS_EVENT_TYPE_MARKET_CREATED: Event indicating a new market was created
     * - BUS_EVENT_TYPE_ASSET: Event for when an asset is added to Vega
     * - BUS_EVENT_TYPE_MARKET_TICK: Event indicating a market tick event
     * - BUS_EVENT_TYPE_WITHDRAWAL: Event for when a withdrawal occurs
     * - BUS_EVENT_TYPE_DEPOSIT: Event for when a deposit occurs
     * - BUS_EVENT_TYPE_AUCTION: Event indicating a change in auction state, for example starting or ending an auction
     * - BUS_EVENT_TYPE_RISK_FACTOR: Event indicating a risk factor has been updated
     * - BUS_EVENT_TYPE_NETWORK_PARAMETER: Event indicating a network parameter has been added or updated
     * - BUS_EVENT_TYPE_LIQUIDITY_PROVISION: Event indicating a liquidity provision has been created or updated
     * - BUS_EVENT_TYPE_MARKET_UPDATED: Event indicating a new market was created
     * - BUS_EVENT_TYPE_ORACLE_SPEC: Event indicating an oracle spec has been created or updated
     * - BUS_EVENT_TYPE_ORACLE_DATA: Event indicating that an oracle data has been broadcast
     * - BUS_EVENT_TYPE_DELEGATION_BALANCE: Event indicating that an delegation balance of a party to a node for current epoch has changed
     * - BUS_EVENT_TYPE_VALIDATOR_SCORE: Event indicating the validator score for the given epoch
     * - BUS_EVENT_TYPE_EPOCH_UPDATE: Event indicating the start or end of an epoch
     * - BUS_EVENT_TYPE_VALIDATOR_UPDATE: Event indicating that validator node has been updated
     * - BUS_EVENT_TYPE_STAKE_LINKING: Event indicating a new staking event have been processed by the network
     * - BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT: Event indicating the payout of a reward has been initiated
     * - BUS_EVENT_TYPE_CHECKPOINT: Event indicating a new checkpoint was created
     * - BUS_EVENT_TYPE_STREAM_START: Event indicating stream is starting
     * - BUS_EVENT_TYPE_KEY_ROTATION: Event indicating key rotation took place
     * - BUS_EVENT_TYPE_STATE_VAR: Event indicating state transitions in state variable consensus
     * - BUS_EVENT_TYPE_NETWORK_LIMITS: Event indicating network limits set or updated
     * - BUS_EVENT_TYPE_TRANSFER: Event indicating a update for a transfer
     * - BUS_EVENT_TYPE_VALIDATOR_RANKING: Event indicating the ranking of validator and their status in Vega
     * - BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT: Event indicating a new multi sig signer event have been processed
     * - BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD: Event indicating the erc20 multi sig threshold have been updated
     * - BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED: Event indicating a new signer has been added to the ERC-20 multisig
     * - BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED: Event indicating a signer has been removed from the ERC-20 multisig
     * - BUS_EVENT_TYPE_POSITION_STATE: Event indicating that a party's position has changed
     * - BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION: Event indicating Ethereum key rotation took place
     * - BUS_EVENT_TYPE_PROTOCOL_UPGRADE_PROPOSAL: Event indicating protocol upgrade proposal updates
     * - BUS_EVENT_TYPE_BEGIN_BLOCK: Event indicating the core is starting to process a new block
     * - BUS_EVENT_TYPE_END_BLOCK: Event indicating the core finished to process a block
     * - BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED: Event indicating the core is starting a protocol upgrade
     * - BUS_EVENT_TYPE_SETTLE_MARKET: Event indicating the market has stopped and settled
     * - BUS_EVENT_TYPE_TRANSACTION_RESULT: Event indicating the result of a transaction processed by the network
     * - BUS_EVENT_TYPE_SNAPSHOT_TAKEN: Event indicating a snapshot was taken at this block height
     * - BUS_EVENT_TYPE_PROTOCOL_UPGRADE_DATA_NODE_READY: Event data node uses to notify that it is ready to upgrade
     * - BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED: Event indicating parties had orders closed because they were distressed, but were not closed out.
     * - BUS_EVENT_TYPE_EXPIRED_ORDERS: Event indicating parties had orders closed because they were distressed, but were not closed out.
     * - BUS_EVENT_TYPE_DISTRESSED_POSITIONS: Event indicating parties have become, or were, distressed but still have an active position.
     * - BUS_EVENT_TYPE_SPOT_LIQUIDITY_PROVISION: Event indicating a spot liquidity provision has been created or updated.
     * - BUS_EVENT_TYPE_STOP_ORDER: Event indicating a stop order has been submitted or updated.
     * - BUS_EVENT_TYPE_FUNDING_PERIOD: Event indicating the start or end of a funding period.
     * - BUS_EVENT_TYPE_FUNDING_PERIOD_DATA_POINT: Event indicating a data point for a funding period has been received.
     * - BUS_EVENT_TYPE_TEAM_CREATED: Event indicating a team has been created.
     * - BUS_EVENT_TYPE_TEAM_UPDATED: Event indicating a team has been updated.
     * - BUS_EVENT_TYPE_REFEREE_SWITCHED_TEAM: Event indicating a referee switched team.
     * - BUS_EVENT_TYPE_REFEREE_JOINED_TEAM: Event indicating a referee joined a team.
     * - BUS_EVENT_TYPE_REFERRAL_PROGRAM_STARTED: Event indicating a referral program started.
     * - BUS_EVENT_TYPE_REFERRAL_PROGRAM_UPDATED: Event indicating a referral program has been updated.
     * - BUS_EVENT_TYPE_REFERRAL_PROGRAM_ENDED: Event indicating a referral program ended.
     * - BUS_EVENT_TYPE_REFERRAL_SET_CREATED: Event indicating a set has been created.
     * - BUS_EVENT_TYPE_REFEREE_JOINED_REFERRAL_SET: Event indicating a referee joined a set.
     * - BUS_EVENT_TYPE_PARTY_ACTIVITY_STREAK: Event indicating the updated activity streak for a party
     * - BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_STARTED: Event indicating a volume discount program started.
     * - BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_UPDATED: Event indicating a volume discount program has been updated.
     * - BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_ENDED: Event indicating a volume discount program ended.
     * - BUS_EVENT_TYPE_REFERRAL_SET_STATS_UPDATED: Event indicating the updated statistics for a referral set.
     * - BUS_EVENT_TYPE_VESTING_STATS_UPDATED: Event indicating the updated statistics for the vesting program.
     * - BUS_EVENT_TYPE_VOLUME_DISCOUNT_STATS_UPDATED: Event indicating the updated statistics for the volume discount.
     * - BUS_EVENT_TYPE_FEES_STATS_UPDATED: Event indicating the fees statistics per market at end of epoch
     * - BUS_EVENT_TYPE_FUNDING_PAYMENTS: Event indicating a funding period has ended and resulted in funding payment transfers.
     * - BUS_EVENT_TYPE_PAID_LIQUIDITY_FEES_STATS_UPDATED: Event used to report the updated paid liquidity fee statistics for the market at the end of the epoch
     * - BUS_EVENT_TYPE_VESTING_SUMMARY: Event used to report the summary of vesting and locked balances at the end of the epoch
     * - BUS_EVENT_TYPE_TRANSFER_FEES_PAID: Event used to link ledger entries to the transfer that triggered the fees being collected.
     * - BUS_EVENT_TYPE_TRANSFER_FEES_DISCOUNT_UPDATED: Event indicating that a party's available transfer fee discount has changed, per asset.
     * - BUS_EVENT_TYPE_PARTY_MARGIN_MODE_UPDATED: Event indicating that a party updated their margin mode on a market.
     * - BUS_EVENT_TYPE_PARTY_PROFILE_UPDATED: Event indicating that a party updated their profile.
     * - BUS_EVENT_TYPE_MARKET: Event indicating a market related event, for example when a market opens
     * - BUS_EVENT_TYPE_TX_ERROR: Event used to report failed transactions back to a user, this is excluded from the ALL type
     * @param marketId Market ID to filter events for, optional field. If omitted, no markets will be filtered out.
     * @param partyId Party ID to filter events for, optional field. If omitted, no parties will be filtered out.
     * @param batchSize Batch size, optional field -
     * If not specified, any events received will be sent immediately. If the client is not ready
     * for the next data-set, data may be dropped a number of times, and eventually the stream is closed.
     * if specified, the first batch will be sent when ready. To receive the next set of events, the client
     * must write an `ObserveEventBatch` message on the stream to flush the buffer.
     * If no message is received in 5 seconds, the stream is closed.
     * Default: 0, send any and all events when they are available.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceObserveEventBus(
        type?: Array<'BUS_EVENT_TYPE_UNSPECIFIED' | 'BUS_EVENT_TYPE_ALL' | 'BUS_EVENT_TYPE_TIME_UPDATE' | 'BUS_EVENT_TYPE_LEDGER_MOVEMENTS' | 'BUS_EVENT_TYPE_POSITION_RESOLUTION' | 'BUS_EVENT_TYPE_ORDER' | 'BUS_EVENT_TYPE_ACCOUNT' | 'BUS_EVENT_TYPE_PARTY' | 'BUS_EVENT_TYPE_TRADE' | 'BUS_EVENT_TYPE_MARGIN_LEVELS' | 'BUS_EVENT_TYPE_PROPOSAL' | 'BUS_EVENT_TYPE_VOTE' | 'BUS_EVENT_TYPE_MARKET_DATA' | 'BUS_EVENT_TYPE_NODE_SIGNATURE' | 'BUS_EVENT_TYPE_LOSS_SOCIALIZATION' | 'BUS_EVENT_TYPE_SETTLE_POSITION' | 'BUS_EVENT_TYPE_SETTLE_DISTRESSED' | 'BUS_EVENT_TYPE_MARKET_CREATED' | 'BUS_EVENT_TYPE_ASSET' | 'BUS_EVENT_TYPE_MARKET_TICK' | 'BUS_EVENT_TYPE_WITHDRAWAL' | 'BUS_EVENT_TYPE_DEPOSIT' | 'BUS_EVENT_TYPE_AUCTION' | 'BUS_EVENT_TYPE_RISK_FACTOR' | 'BUS_EVENT_TYPE_NETWORK_PARAMETER' | 'BUS_EVENT_TYPE_LIQUIDITY_PROVISION' | 'BUS_EVENT_TYPE_MARKET_UPDATED' | 'BUS_EVENT_TYPE_ORACLE_SPEC' | 'BUS_EVENT_TYPE_ORACLE_DATA' | 'BUS_EVENT_TYPE_DELEGATION_BALANCE' | 'BUS_EVENT_TYPE_VALIDATOR_SCORE' | 'BUS_EVENT_TYPE_EPOCH_UPDATE' | 'BUS_EVENT_TYPE_VALIDATOR_UPDATE' | 'BUS_EVENT_TYPE_STAKE_LINKING' | 'BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT' | 'BUS_EVENT_TYPE_CHECKPOINT' | 'BUS_EVENT_TYPE_STREAM_START' | 'BUS_EVENT_TYPE_KEY_ROTATION' | 'BUS_EVENT_TYPE_STATE_VAR' | 'BUS_EVENT_TYPE_NETWORK_LIMITS' | 'BUS_EVENT_TYPE_TRANSFER' | 'BUS_EVENT_TYPE_VALIDATOR_RANKING' | 'BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT' | 'BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD' | 'BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED' | 'BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED' | 'BUS_EVENT_TYPE_POSITION_STATE' | 'BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION' | 'BUS_EVENT_TYPE_PROTOCOL_UPGRADE_PROPOSAL' | 'BUS_EVENT_TYPE_BEGIN_BLOCK' | 'BUS_EVENT_TYPE_END_BLOCK' | 'BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED' | 'BUS_EVENT_TYPE_SETTLE_MARKET' | 'BUS_EVENT_TYPE_TRANSACTION_RESULT' | 'BUS_EVENT_TYPE_SNAPSHOT_TAKEN' | 'BUS_EVENT_TYPE_PROTOCOL_UPGRADE_DATA_NODE_READY' | 'BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED' | 'BUS_EVENT_TYPE_EXPIRED_ORDERS' | 'BUS_EVENT_TYPE_DISTRESSED_POSITIONS' | 'BUS_EVENT_TYPE_SPOT_LIQUIDITY_PROVISION' | 'BUS_EVENT_TYPE_STOP_ORDER' | 'BUS_EVENT_TYPE_FUNDING_PERIOD' | 'BUS_EVENT_TYPE_FUNDING_PERIOD_DATA_POINT' | 'BUS_EVENT_TYPE_TEAM_CREATED' | 'BUS_EVENT_TYPE_TEAM_UPDATED' | 'BUS_EVENT_TYPE_REFEREE_SWITCHED_TEAM' | 'BUS_EVENT_TYPE_REFEREE_JOINED_TEAM' | 'BUS_EVENT_TYPE_REFERRAL_PROGRAM_STARTED' | 'BUS_EVENT_TYPE_REFERRAL_PROGRAM_UPDATED' | 'BUS_EVENT_TYPE_REFERRAL_PROGRAM_ENDED' | 'BUS_EVENT_TYPE_REFERRAL_SET_CREATED' | 'BUS_EVENT_TYPE_REFEREE_JOINED_REFERRAL_SET' | 'BUS_EVENT_TYPE_PARTY_ACTIVITY_STREAK' | 'BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_STARTED' | 'BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_UPDATED' | 'BUS_EVENT_TYPE_VOLUME_DISCOUNT_PROGRAM_ENDED' | 'BUS_EVENT_TYPE_REFERRAL_SET_STATS_UPDATED' | 'BUS_EVENT_TYPE_VESTING_STATS_UPDATED' | 'BUS_EVENT_TYPE_VOLUME_DISCOUNT_STATS_UPDATED' | 'BUS_EVENT_TYPE_FEES_STATS_UPDATED' | 'BUS_EVENT_TYPE_FUNDING_PAYMENTS' | 'BUS_EVENT_TYPE_PAID_LIQUIDITY_FEES_STATS_UPDATED' | 'BUS_EVENT_TYPE_VESTING_SUMMARY' | 'BUS_EVENT_TYPE_TRANSFER_FEES_PAID' | 'BUS_EVENT_TYPE_TRANSFER_FEES_DISCOUNT_UPDATED' | 'BUS_EVENT_TYPE_PARTY_MARGIN_MODE_UPDATED' | 'BUS_EVENT_TYPE_PARTY_PROFILE_UPDATED' | 'BUS_EVENT_TYPE_MARKET' | 'BUS_EVENT_TYPE_TX_ERROR'>,
        marketId?: string,
        partyId?: string,
        batchSize?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v1ObserveEventBusResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stream/event/bus',
            query: {
                'type': type,
                'marketId': marketId,
                'partyId': partyId,
                'batchSize': batchSize,
            },
        });
    }

    /**
     * Vega time
     * Get current Vega time
     * @returns v1GetVegaTimeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceGetVegaTime(): CancelablePromise<v1GetVegaTimeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/time',
        });
    }

    /**
     * Submit transaction
     * Submit a signed transaction to the network containing a command to be executed such that if the submission is successful then it will be included in the chain's mempool.
     * The network will then attempt to execute the transaction in the next available block, where the results of its execution can be seen on the EventBus.
     * @param requestBody
     * @returns v1SubmitTransactionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceSubmitTransaction(
        requestBody: v1SubmitTransactionRequest,
    ): CancelablePromise<v1SubmitTransactionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transaction',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Check transaction
     * Send a signed transaction containing a command to the network to be checked, but not added to the chain's mempool.
     * This is useful for checking the validity of a potential transaction before submitting it.
     * @param requestBody
     * @returns v1CheckTransactionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceCheckTransaction(
        requestBody: v1CheckTransactionRequest,
    ): CancelablePromise<v1CheckTransactionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transaction/check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Submit raw transaction
     * Submit a pre-serialised signed transaction containing a command to the network to be executed, such that if the submission is successful then it will be included in the chain's mempool.
     * The network will then attempt to execute the transaction in the next available block, where the results of its execution can be seen on the EventBus.
     * @param requestBody
     * @returns v1SubmitRawTransactionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceSubmitRawTransaction(
        requestBody: v1SubmitRawTransactionRequest,
    ): CancelablePromise<v1SubmitRawTransactionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transaction/raw',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Check raw transaction
     * Send a pre-serialised transaction containing a command to the network to be checked, but then not added to the chain's mempool.
     * This is useful for checking the validity of a potential transaction before submitting it.
     * @param requestBody
     * @returns v1CheckRawTransactionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreServiceCheckRawTransaction(
        requestBody: v1CheckRawTransactionRequest,
    ): CancelablePromise<v1CheckRawTransactionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transaction/raw/check',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

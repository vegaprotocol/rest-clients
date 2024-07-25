/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2EstimateTransferFeeResponse } from '../models/v2EstimateTransferFeeResponse';
import type { v2GetTotalTransferFeeDiscountResponse } from '../models/v2GetTotalTransferFeeDiscountResponse';
import type { v2GetTransferResponse } from '../models/v2GetTransferResponse';
import type { v2ListTransfersResponse } from '../models/v2ListTransfersResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransfersService {

    /**
     * Get transfer by ID
     * Get a specific transfer by ID
     * @param transferId Transfer ID to request data for.
     * @returns v2GetTransferResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetTransfer(
        transferId: string,
    ): CancelablePromise<v2GetTransferResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfer/{transferId}',
            path: {
                'transferId': transferId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List transfers
     * Get a list of transfers between public keys. A valid value for public key can be one of:
     * - a party ID
     * - "network"
     * - "0000000000000000000000000000000000000000000000000000000000000000", the public key for the global rewards account
     * @param pubkey Restrict transfer to those where the given public key is a sender or receiver.
     * @param direction Restrict transfers to those in the given direction from the supplied public key.
     * When is_reward is true, and pubkey is set, then direction MUST be TRANSFER_DIRECTION_DIRECTION_FROM.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param isReward Restrict transfers to those related to reward transfers.
     * @param fromEpoch Epoch to filter from (included). If omitted, the range goes from the oldest epoch to the `to epoch`.
     * @param toEpoch Epoch to filter to (included). If omitted, the range goes from `from epoch` to the most recent epoch.
     * @param status Status to filter on.
     *
     * - STATUS_UNSPECIFIED: Default value
     * - STATUS_PENDING: Indicates a transfer still being processed
     * - STATUS_DONE: Indicates a transfer accepted by the Vega network
     * - STATUS_REJECTED: Indicates a transfer rejected by the Vega network
     * - STATUS_STOPPED: Indicates a transfer stopped by the Vega network
     * e.g: no funds left to cover the transfer
     * - STATUS_CANCELLED: Indicates a transfer cancelled by the user
     * @param scope Dispatch strategy's scope to filter for.
     *
     * - SCOPE_INDIVIDUAL: Matches transfers that have dispatch strategy scope of individual set.
     * - SCOPE_TEAM: Matches transfers that have dispatch strategy scope of team set.
     * @param gameId Game ID to filter on.
     * @param fromAccountType Account type to filter on for transfers from account.
     *
     * - ACCOUNT_TYPE_UNSPECIFIED: Default value
     * - ACCOUNT_TYPE_INSURANCE: Insurance pool accounts contain insurance pool funds for a market
     * - ACCOUNT_TYPE_SETTLEMENT: Settlement accounts exist only during settlement or mark-to-market
     * - ACCOUNT_TYPE_MARGIN: Margin accounts contain funds set aside for the margin needed to support a party's open positions.
     * Each party will have a margin account for each market they have traded in.
     * Required initial margin is allocated to each market from user's general account.
     * Collateral in the margin account can't be withdrawn or used as margin on another market until
     * it is released back to the general account.
     * Vega protocol uses an internal accounting system to segregate funds held as
     * margin from other funds to ensure they are never lost or 'double spent'
     *
     * Margin account funds will vary as margin requirements on positions change
     * - ACCOUNT_TYPE_GENERAL: General accounts contain the collateral for a party that is not otherwise allocated. A party will
     * have multiple general accounts, one for each asset they want
     * to trade with
     *
     * General accounts are where funds are initially deposited or withdrawn from,
     * it is also the account where funds are taken to fulfil fees and initial margin requirements
     * - ACCOUNT_TYPE_FEES_INFRASTRUCTURE: Infrastructure accounts contain fees earned by providing infrastructure on Vega
     * - ACCOUNT_TYPE_FEES_LIQUIDITY: Liquidity accounts contain fees earned by providing liquidity on Vega markets
     * - ACCOUNT_TYPE_FEES_MAKER: This account is created to hold fees earned by placing orders that sit on the book
     * and are then matched with an incoming order to create a trade - These fees reward parties
     * who provide the best priced liquidity that actually allows trading to take place
     * - ACCOUNT_TYPE_BOND: This account is created to maintain liquidity providers funds commitments
     * - ACCOUNT_TYPE_EXTERNAL: External account represents an external source (deposit/withdrawal)
     * - ACCOUNT_TYPE_GLOBAL_INSURANCE: Global insurance account for the asset
     * - ACCOUNT_TYPE_GLOBAL_REWARD: Global reward account for the asset
     * - ACCOUNT_TYPE_PENDING_TRANSFERS: Per asset account used to store pending transfers (if any)
     * - ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: Per asset reward account for fees paid to makers
     * - ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: Per asset reward account for fees received by makers
     * - ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: Per asset reward account for fees received by liquidity providers
     * - ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: Per asset reward account for market proposers when the market goes above some trading threshold
     * - ACCOUNT_TYPE_HOLDING: Per asset account for holding in-flight unfilled orders' funds
     * - ACCOUNT_TYPE_LP_LIQUIDITY_FEES: Network controlled liquidity provider's account, per market, to hold accrued liquidity fees.
     * - ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION: Network controlled liquidity fees bonus distribution account, per market.
     * - ACCOUNT_TYPE_NETWORK_TREASURY: Network controlled treasury
     * - ACCOUNT_TYPE_VESTING_REWARDS: Account holding user's rewards for the vesting period
     * - ACCOUNT_TYPE_VESTED_REWARDS: Account holding user's rewards after the vesting period
     * - ACCOUNT_TYPE_REWARD_AVERAGE_POSITION: Per asset market reward account given for average position
     * - ACCOUNT_TYPE_REWARD_RELATIVE_RETURN: Per asset market reward account given for relative return
     * - ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY: Per asset market reward account given for return volatility
     * - ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING: Per asset market reward account given to validators by their ranking
     * - ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD: Per asset account for pending fee referral reward payouts
     * - ACCOUNT_TYPE_ORDER_MARGIN: Per asset market account for party in isolated margin mode
     * - ACCOUNT_TYPE_REWARD_REALISED_RETURN: Per asset market reward account for realised return
     * @param toAccountType Account type to filter on for transfers to account.
     *
     * - ACCOUNT_TYPE_UNSPECIFIED: Default value
     * - ACCOUNT_TYPE_INSURANCE: Insurance pool accounts contain insurance pool funds for a market
     * - ACCOUNT_TYPE_SETTLEMENT: Settlement accounts exist only during settlement or mark-to-market
     * - ACCOUNT_TYPE_MARGIN: Margin accounts contain funds set aside for the margin needed to support a party's open positions.
     * Each party will have a margin account for each market they have traded in.
     * Required initial margin is allocated to each market from user's general account.
     * Collateral in the margin account can't be withdrawn or used as margin on another market until
     * it is released back to the general account.
     * Vega protocol uses an internal accounting system to segregate funds held as
     * margin from other funds to ensure they are never lost or 'double spent'
     *
     * Margin account funds will vary as margin requirements on positions change
     * - ACCOUNT_TYPE_GENERAL: General accounts contain the collateral for a party that is not otherwise allocated. A party will
     * have multiple general accounts, one for each asset they want
     * to trade with
     *
     * General accounts are where funds are initially deposited or withdrawn from,
     * it is also the account where funds are taken to fulfil fees and initial margin requirements
     * - ACCOUNT_TYPE_FEES_INFRASTRUCTURE: Infrastructure accounts contain fees earned by providing infrastructure on Vega
     * - ACCOUNT_TYPE_FEES_LIQUIDITY: Liquidity accounts contain fees earned by providing liquidity on Vega markets
     * - ACCOUNT_TYPE_FEES_MAKER: This account is created to hold fees earned by placing orders that sit on the book
     * and are then matched with an incoming order to create a trade - These fees reward parties
     * who provide the best priced liquidity that actually allows trading to take place
     * - ACCOUNT_TYPE_BOND: This account is created to maintain liquidity providers funds commitments
     * - ACCOUNT_TYPE_EXTERNAL: External account represents an external source (deposit/withdrawal)
     * - ACCOUNT_TYPE_GLOBAL_INSURANCE: Global insurance account for the asset
     * - ACCOUNT_TYPE_GLOBAL_REWARD: Global reward account for the asset
     * - ACCOUNT_TYPE_PENDING_TRANSFERS: Per asset account used to store pending transfers (if any)
     * - ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: Per asset reward account for fees paid to makers
     * - ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: Per asset reward account for fees received by makers
     * - ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: Per asset reward account for fees received by liquidity providers
     * - ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: Per asset reward account for market proposers when the market goes above some trading threshold
     * - ACCOUNT_TYPE_HOLDING: Per asset account for holding in-flight unfilled orders' funds
     * - ACCOUNT_TYPE_LP_LIQUIDITY_FEES: Network controlled liquidity provider's account, per market, to hold accrued liquidity fees.
     * - ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION: Network controlled liquidity fees bonus distribution account, per market.
     * - ACCOUNT_TYPE_NETWORK_TREASURY: Network controlled treasury
     * - ACCOUNT_TYPE_VESTING_REWARDS: Account holding user's rewards for the vesting period
     * - ACCOUNT_TYPE_VESTED_REWARDS: Account holding user's rewards after the vesting period
     * - ACCOUNT_TYPE_REWARD_AVERAGE_POSITION: Per asset market reward account given for average position
     * - ACCOUNT_TYPE_REWARD_RELATIVE_RETURN: Per asset market reward account given for relative return
     * - ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY: Per asset market reward account given for return volatility
     * - ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING: Per asset market reward account given to validators by their ranking
     * - ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD: Per asset account for pending fee referral reward payouts
     * - ACCOUNT_TYPE_ORDER_MARGIN: Per asset market account for party in isolated margin mode
     * - ACCOUNT_TYPE_REWARD_REALISED_RETURN: Per asset market reward account for realised return
     * @returns v2ListTransfersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListTransfers(
        pubkey?: string,
        direction: 'TRANSFER_DIRECTION_UNSPECIFIED' | 'TRANSFER_DIRECTION_TRANSFER_FROM' | 'TRANSFER_DIRECTION_TRANSFER_TO' | 'TRANSFER_DIRECTION_TRANSFER_TO_OR_FROM' = 'TRANSFER_DIRECTION_UNSPECIFIED',
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        isReward?: boolean,
        fromEpoch?: string,
        toEpoch?: string,
        status: 'STATUS_UNSPECIFIED' | 'STATUS_PENDING' | 'STATUS_DONE' | 'STATUS_REJECTED' | 'STATUS_STOPPED' | 'STATUS_CANCELLED' = 'STATUS_UNSPECIFIED',
        scope: 'SCOPE_UNSPECIFIED' | 'SCOPE_INDIVIDUAL' | 'SCOPE_TEAM' = 'SCOPE_UNSPECIFIED',
        gameId?: string,
        fromAccountType: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN' = 'ACCOUNT_TYPE_UNSPECIFIED',
        toAccountType: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN' = 'ACCOUNT_TYPE_UNSPECIFIED',
    ): CancelablePromise<v2ListTransfersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfers',
            query: {
                'pubkey': pubkey,
                'direction': direction,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'isReward': isReward,
                'fromEpoch': fromEpoch,
                'toEpoch': toEpoch,
                'status': status,
                'scope': scope,
                'gameId': gameId,
                'fromAccountType': fromAccountType,
                'toAccountType': toAccountType,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Estimate transfer fee costs
     * Estimate transfer fee costs with potential discount applied
     * @param fromAccount Sender's ID.
     * @param fromAccountType Type of account sent from.
     *
     * - ACCOUNT_TYPE_UNSPECIFIED: Default value
     * - ACCOUNT_TYPE_INSURANCE: Insurance pool accounts contain insurance pool funds for a market
     * - ACCOUNT_TYPE_SETTLEMENT: Settlement accounts exist only during settlement or mark-to-market
     * - ACCOUNT_TYPE_MARGIN: Margin accounts contain funds set aside for the margin needed to support a party's open positions.
     * Each party will have a margin account for each market they have traded in.
     * Required initial margin is allocated to each market from user's general account.
     * Collateral in the margin account can't be withdrawn or used as margin on another market until
     * it is released back to the general account.
     * Vega protocol uses an internal accounting system to segregate funds held as
     * margin from other funds to ensure they are never lost or 'double spent'
     *
     * Margin account funds will vary as margin requirements on positions change
     * - ACCOUNT_TYPE_GENERAL: General accounts contain the collateral for a party that is not otherwise allocated. A party will
     * have multiple general accounts, one for each asset they want
     * to trade with
     *
     * General accounts are where funds are initially deposited or withdrawn from,
     * it is also the account where funds are taken to fulfil fees and initial margin requirements
     * - ACCOUNT_TYPE_FEES_INFRASTRUCTURE: Infrastructure accounts contain fees earned by providing infrastructure on Vega
     * - ACCOUNT_TYPE_FEES_LIQUIDITY: Liquidity accounts contain fees earned by providing liquidity on Vega markets
     * - ACCOUNT_TYPE_FEES_MAKER: This account is created to hold fees earned by placing orders that sit on the book
     * and are then matched with an incoming order to create a trade - These fees reward parties
     * who provide the best priced liquidity that actually allows trading to take place
     * - ACCOUNT_TYPE_BOND: This account is created to maintain liquidity providers funds commitments
     * - ACCOUNT_TYPE_EXTERNAL: External account represents an external source (deposit/withdrawal)
     * - ACCOUNT_TYPE_GLOBAL_INSURANCE: Global insurance account for the asset
     * - ACCOUNT_TYPE_GLOBAL_REWARD: Global reward account for the asset
     * - ACCOUNT_TYPE_PENDING_TRANSFERS: Per asset account used to store pending transfers (if any)
     * - ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: Per asset reward account for fees paid to makers
     * - ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: Per asset reward account for fees received by makers
     * - ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: Per asset reward account for fees received by liquidity providers
     * - ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: Per asset reward account for market proposers when the market goes above some trading threshold
     * - ACCOUNT_TYPE_HOLDING: Per asset account for holding in-flight unfilled orders' funds
     * - ACCOUNT_TYPE_LP_LIQUIDITY_FEES: Network controlled liquidity provider's account, per market, to hold accrued liquidity fees.
     * - ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION: Network controlled liquidity fees bonus distribution account, per market.
     * - ACCOUNT_TYPE_NETWORK_TREASURY: Network controlled treasury
     * - ACCOUNT_TYPE_VESTING_REWARDS: Account holding user's rewards for the vesting period
     * - ACCOUNT_TYPE_VESTED_REWARDS: Account holding user's rewards after the vesting period
     * - ACCOUNT_TYPE_REWARD_AVERAGE_POSITION: Per asset market reward account given for average position
     * - ACCOUNT_TYPE_REWARD_RELATIVE_RETURN: Per asset market reward account given for relative return
     * - ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY: Per asset market reward account given for return volatility
     * - ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING: Per asset market reward account given to validators by their ranking
     * - ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD: Per asset account for pending fee referral reward payouts
     * - ACCOUNT_TYPE_ORDER_MARGIN: Per asset market account for party in isolated margin mode
     * - ACCOUNT_TYPE_REWARD_REALISED_RETURN: Per asset market reward account for realised return
     * @param toAccount Receiver's ID.
     * @param amount Amount to be transferred.
     * @param assetId Asset ID for the asset associated with the transaction.
     * @param fromAmmKey AMM public key, if assets are being transferred from an AMM key to the AMM owner's public key.
     * The `from_account` must be the owner of this AMM key.
     * @returns v2EstimateTransferFeeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceEstimateTransferFee(
        fromAccount?: string,
        fromAccountType: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN' = 'ACCOUNT_TYPE_UNSPECIFIED',
        toAccount?: string,
        amount?: string,
        assetId?: string,
        fromAmmKey?: string,
    ): CancelablePromise<v2EstimateTransferFeeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfers/estimate-fee',
            query: {
                'fromAccount': fromAccount,
                'fromAccountType': fromAccountType,
                'toAccount': toAccount,
                'amount': amount,
                'assetId': assetId,
                'fromAmmKey': fromAmmKey,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Available transfer fee discount
     * Returns available per party per asset transfer discount
     * @param partyId ID of party eligible for the discount.
     * @param assetId ID of asset associated with the discount.
     * @returns v2GetTotalTransferFeeDiscountResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetTotalTransferFeeDiscount(
        partyId?: string,
        assetId?: string,
    ): CancelablePromise<v2GetTotalTransferFeeDiscountResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/transfers/total-fee-discount',
            query: {
                'partyId': partyId,
                'assetId': assetId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

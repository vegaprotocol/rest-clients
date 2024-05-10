/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListAccountsResponse } from '../models/v2ListAccountsResponse';
import type { v2ListBalanceChangesResponse } from '../models/v2ListBalanceChangesResponse';
import type { v2ObserveAccountsResponse } from '../models/v2ObserveAccountsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountsService {

    /**
     * List accounts
     * Get a list of accounts matching the supplied filter, including their current balances.
     * If a given account has never had a balance, it will be absent from the list.
     * @param filterAssetId Restrict accounts to those holding balances in this asset ID.
     * @param filterPartyIds Restrict accounts to those owned by the parties in this list. Pass an empty list for no filter.
     * @param filterMarketIds Restrict accounts to those connected to the markets in this list. Pass an empty list for no filter.
     * @param filterAccountTypes Restrict accounts to those connected to any of the types in this list. Pass an empty list for no filter.
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
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListAccountsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListAccounts(
        filterAssetId?: string,
        filterPartyIds?: Array<string>,
        filterMarketIds?: Array<string>,
        filterAccountTypes?: Array<'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN'>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListAccountsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/accounts',
            query: {
                'filter.assetId': filterAssetId,
                'filter.partyIds': filterPartyIds,
                'filter.marketIds': filterMarketIds,
                'filter.accountTypes': filterAccountTypes,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List balance changes
     * Get a list of the changes in account balances over a period of time.
     * @param filterAssetId Restrict accounts to those holding balances in this asset ID.
     * @param filterPartyIds Restrict accounts to those owned by the parties in this list. Pass an empty list for no filter.
     * @param filterMarketIds Restrict accounts to those connected to the markets in this list. Pass an empty list for no filter.
     * @param filterAccountTypes Restrict accounts to those connected to any of the types in this list. Pass an empty list for no filter.
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
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns v2ListBalanceChangesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListBalanceChanges(
        filterAssetId?: string,
        filterPartyIds?: Array<string>,
        filterMarketIds?: Array<string>,
        filterAccountTypes?: Array<'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN'>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<v2ListBalanceChangesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/balance/changes',
            query: {
                'filter.assetId': filterAssetId,
                'filter.partyIds': filterPartyIds,
                'filter.marketIds': filterMarketIds,
                'filter.accountTypes': filterAccountTypes,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Accounts subscription
     * Subscribe to a stream of accounts
     * @param marketId Market ID to filter accounts by. If empty, no markets will be filtered.
     * @param partyId Party ID to filter accounts by. If empty, no parties will be filtered.
     * @param asset Asset ID to filter accounts by. If empty, no assets will be filtered.
     * @param type Account type to subscribe to, required field.
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
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveAccounts(
        marketId?: string,
        partyId?: string,
        asset?: string,
        type: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD' | 'ACCOUNT_TYPE_ORDER_MARGIN' | 'ACCOUNT_TYPE_REWARD_REALISED_RETURN' = 'ACCOUNT_TYPE_UNSPECIFIED',
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveAccountsResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/accounts',
            query: {
                'marketId': marketId,
                'partyId': partyId,
                'asset': asset,
                'type': type,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}

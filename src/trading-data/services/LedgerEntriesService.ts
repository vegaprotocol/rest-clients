/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apiHttpBody } from '../models/apiHttpBody';
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2ListLedgerEntriesResponse } from '../models/v2ListLedgerEntriesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LedgerEntriesService {

    /**
     * Export ledger entries
     * Export ledger entries records ledger entries to a csv file.
     * May or may not contain a date range - if no date range is provided, list all records for all times.
     *
     * Ledger entries can be exported by:
     * - export ledger entries for a single party for a given asset within a given time range
     * - export ledger entries for a single party for a given asset for all times
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * @param partyId Restrict exported ledger entries to those relating to the given party ID.
     * @param assetId Restrict exported ledger entries to those relating to the given asset ID.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceExportLedgerEntries(
        partyId: string,
        assetId?: string,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: apiHttpBody;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ledgerentry/export',
            query: {
                'partyId': partyId,
                'assetId': assetId,
                'dateRange.startTimestamp': dateRangeStartTimestamp,
                'dateRange.endTimestamp': dateRangeEndTimestamp,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List ledger entries
     * Get a list of ledger entries within the given date range.
     * This query requests and sums the number of ledger entries from a given subset of accounts, specified via the 'filter' argument.
     * It returns a time series - implemented as a list of AggregateLedgerEntry structs - with a row for every time
     * the summed ledger entries of the set of specified accounts changes.
     * Each account filter must contain no more than one party ID.
     *
     * Entries can be filtered by:
     * - the sending account (market ID, asset ID, account type)
     * - receiving account (market ID, asset ID, account type)
     * - sending AND receiving account
     * - transfer type either in addition to the above filters or as a standalone option
     * @param filterCloseOnAccountFilters Determines whether an entry must have accounts matching both the account_from_filter
     * and the account_to_filter. If set to 'true', entries must have matches in both filters.
     * If set to `false`, entries matching only the account_from_filter or the account_to_filter will also be included.
     * @param filterFromAccountFilterAssetId Restrict accounts to those holding balances in this asset ID.
     * @param filterFromAccountFilterPartyIds Restrict accounts to those owned by the parties in this list. Pass an empty list for no filter.
     * @param filterFromAccountFilterMarketIds Restrict accounts to those connected to the markets in this list. Pass an empty list for no filter.
     * @param filterFromAccountFilterAccountTypes Restrict accounts to those connected to any of the types in this list. Pass an empty list for no filter.
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
     * @param filterToAccountFilterAssetId Restrict accounts to those holding balances in this asset ID.
     * @param filterToAccountFilterPartyIds Restrict accounts to those owned by the parties in this list. Pass an empty list for no filter.
     * @param filterToAccountFilterMarketIds Restrict accounts to those connected to the markets in this list. Pass an empty list for no filter.
     * @param filterToAccountFilterAccountTypes Restrict accounts to those connected to any of the types in this list. Pass an empty list for no filter.
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
     * @param filterTransferTypes List of transfer types that is used for filtering sender and receiver accounts.
     *
     * - TRANSFER_TYPE_UNSPECIFIED: Default value, always invalid
     * - TRANSFER_TYPE_LOSS: Funds deducted after final settlement loss
     * - TRANSFER_TYPE_WIN: Funds added to general account after final settlement gain
     * - TRANSFER_TYPE_MTM_LOSS: Funds deducted from margin account after mark to market loss
     * - TRANSFER_TYPE_MTM_WIN: Funds added to margin account after mark to market gain
     * - TRANSFER_TYPE_MARGIN_LOW: Funds transferred from general account to meet margin requirement
     * - TRANSFER_TYPE_MARGIN_HIGH: Excess margin amount returned to general account
     * - TRANSFER_TYPE_MARGIN_CONFISCATED: Margin confiscated from margin account to fulfil closeout
     * - TRANSFER_TYPE_MAKER_FEE_PAY: Maker fee paid from general account
     * - TRANSFER_TYPE_MAKER_FEE_RECEIVE: Maker fee received into general account
     * - TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY: Infrastructure fee paid from general account
     * - TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE: Infrastructure fee received into general account
     * - TRANSFER_TYPE_LIQUIDITY_FEE_PAY: Liquidity fee paid from general account
     * - TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE: Liquidity fee received into general account
     * - TRANSFER_TYPE_BOND_LOW: Bond account funded from general account to meet required bond amount
     * - TRANSFER_TYPE_BOND_HIGH: Bond returned to general account after liquidity commitment was reduced
     * - TRANSFER_TYPE_WITHDRAW: Funds withdrawn from general account
     * - TRANSFER_TYPE_DEPOSIT: Funds deposited to general account
     * - TRANSFER_TYPE_BOND_SLASHING: Bond account penalised when liquidity commitment not met
     * - TRANSFER_TYPE_REWARD_PAYOUT: Reward payout received
     * - TRANSFER_TYPE_TRANSFER_FUNDS_SEND: Internal Vega network instruction for the collateral engine to move funds from a user's general account into the pending transfers pool
     * - TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE: Internal Vega network instruction for the collateral engine to move funds from the pending transfers pool account into the destination account
     * - TRANSFER_TYPE_CLEAR_ACCOUNT: Market-related accounts emptied because market has closed
     * - TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE: Balances restored after network restart
     * - TRANSFER_TYPE_SPOT: Spot trade delivery
     * - TRANSFER_TYPE_HOLDING_LOCK: An internal instruction to transfer a quantity corresponding to an active spot order from a general account into a party holding account.
     * - TRANSFER_TYPE_HOLDING_RELEASE: An internal instruction to transfer an excess quantity corresponding to an active spot order from a holding account into a party general account.
     * - TRANSFER_TYPE_SUCCESSOR_INSURANCE_FRACTION: Insurance pool fraction transfer from parent to successor market.
     * - TRANSFER_TYPE_LIQUIDITY_FEE_ALLOCATE: Allocates liquidity fee earnings to each liquidity provider's network controlled liquidity fee account.
     * - TRANSFER_TYPE_LIQUIDITY_FEE_NET_DISTRIBUTE: Distributes net fee earnings from liquidity provider's fee account to their general account.
     * - TRANSFER_TYPE_SLA_PENALTY_BOND_APPLY: Applies SLA penalty by moving funds from party's bond account to market's insurance pool.
     * - TRANSFER_TYPE_SLA_PENALTY_LP_FEE_APPLY: Applies SLA penalty by moving funds from the liquidity provider's fee account to market insurance pool.
     * - TRANSFER_TYPE_LIQUIDITY_FEE_UNPAID_COLLECT: Collects penalties from the liquidity provider's fee account before the fee revenue is paid, and transfers it to the market's bonus distribution account.
     * - TRANSFER_TYPE_SLA_PERFORMANCE_BONUS_DISTRIBUTE: Distributes performance bonus from market bonus to liquidity provider's general account.
     * - TRANSFER_TYPE_PERPETUALS_FUNDING_LOSS: Funds deducted from margin account after a perpetuals funding loss.
     * - TRANSFER_TYPE_PERPETUALS_FUNDING_WIN: Funds added to margin account after a perpetuals funding gain.
     * - TRANSFER_TYPE_REWARDS_VESTED: Funds moved from the vesting account to the vested account once the vesting period is reached.
     * - TRANSFER_TYPE_FEE_REFERRER_REWARD_PAY: Fee referrer reward paid from general account.
     * - TRANSFER_TYPE_FEE_REFERRER_REWARD_DISTRIBUTE: Fee referrer reward received into general account of the referrer.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @param dateRangeStartTimestamp Timestamp in Unix nanoseconds indicating the start of the date range.
     * @param dateRangeEndTimestamp Timestamp in Unix nanoseconds indicating the end of the date range.
     * @returns v2ListLedgerEntriesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListLedgerEntries(
        filterCloseOnAccountFilters?: boolean,
        filterFromAccountFilterAssetId?: string,
        filterFromAccountFilterPartyIds?: Array<string>,
        filterFromAccountFilterMarketIds?: Array<string>,
        filterFromAccountFilterAccountTypes?: Array<'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD'>,
        filterToAccountFilterAssetId?: string,
        filterToAccountFilterPartyIds?: Array<string>,
        filterToAccountFilterMarketIds?: Array<string>,
        filterToAccountFilterAccountTypes?: Array<'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_INSURANCE' | 'ACCOUNT_TYPE_SETTLEMENT' | 'ACCOUNT_TYPE_MARGIN' | 'ACCOUNT_TYPE_GENERAL' | 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' | 'ACCOUNT_TYPE_FEES_LIQUIDITY' | 'ACCOUNT_TYPE_FEES_MAKER' | 'ACCOUNT_TYPE_BOND' | 'ACCOUNT_TYPE_EXTERNAL' | 'ACCOUNT_TYPE_GLOBAL_INSURANCE' | 'ACCOUNT_TYPE_GLOBAL_REWARD' | 'ACCOUNT_TYPE_PENDING_TRANSFERS' | 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES' | 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES' | 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS' | 'ACCOUNT_TYPE_HOLDING' | 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES' | 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION' | 'ACCOUNT_TYPE_NETWORK_TREASURY' | 'ACCOUNT_TYPE_VESTING_REWARDS' | 'ACCOUNT_TYPE_VESTED_REWARDS' | 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION' | 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN' | 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY' | 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING' | 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD'>,
        filterTransferTypes?: Array<'TRANSFER_TYPE_UNSPECIFIED' | 'TRANSFER_TYPE_LOSS' | 'TRANSFER_TYPE_WIN' | 'TRANSFER_TYPE_MTM_LOSS' | 'TRANSFER_TYPE_MTM_WIN' | 'TRANSFER_TYPE_MARGIN_LOW' | 'TRANSFER_TYPE_MARGIN_HIGH' | 'TRANSFER_TYPE_MARGIN_CONFISCATED' | 'TRANSFER_TYPE_MAKER_FEE_PAY' | 'TRANSFER_TYPE_MAKER_FEE_RECEIVE' | 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY' | 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE' | 'TRANSFER_TYPE_LIQUIDITY_FEE_PAY' | 'TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE' | 'TRANSFER_TYPE_BOND_LOW' | 'TRANSFER_TYPE_BOND_HIGH' | 'TRANSFER_TYPE_WITHDRAW' | 'TRANSFER_TYPE_DEPOSIT' | 'TRANSFER_TYPE_BOND_SLASHING' | 'TRANSFER_TYPE_REWARD_PAYOUT' | 'TRANSFER_TYPE_TRANSFER_FUNDS_SEND' | 'TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE' | 'TRANSFER_TYPE_CLEAR_ACCOUNT' | 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' | 'TRANSFER_TYPE_SPOT' | 'TRANSFER_TYPE_HOLDING_LOCK' | 'TRANSFER_TYPE_HOLDING_RELEASE' | 'TRANSFER_TYPE_SUCCESSOR_INSURANCE_FRACTION' | 'TRANSFER_TYPE_LIQUIDITY_FEE_ALLOCATE' | 'TRANSFER_TYPE_LIQUIDITY_FEE_NET_DISTRIBUTE' | 'TRANSFER_TYPE_SLA_PENALTY_BOND_APPLY' | 'TRANSFER_TYPE_SLA_PENALTY_LP_FEE_APPLY' | 'TRANSFER_TYPE_LIQUIDITY_FEE_UNPAID_COLLECT' | 'TRANSFER_TYPE_SLA_PERFORMANCE_BONUS_DISTRIBUTE' | 'TRANSFER_TYPE_PERPETUALS_FUNDING_LOSS' | 'TRANSFER_TYPE_PERPETUALS_FUNDING_WIN' | 'TRANSFER_TYPE_REWARDS_VESTED' | 'TRANSFER_TYPE_FEE_REFERRER_REWARD_PAY' | 'TRANSFER_TYPE_FEE_REFERRER_REWARD_DISTRIBUTE'>,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
        dateRangeStartTimestamp?: string,
        dateRangeEndTimestamp?: string,
    ): CancelablePromise<v2ListLedgerEntriesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ledgerentry/history',
            query: {
                'filter.closeOnAccountFilters': filterCloseOnAccountFilters,
                'filter.fromAccountFilter.assetId': filterFromAccountFilterAssetId,
                'filter.fromAccountFilter.partyIds': filterFromAccountFilterPartyIds,
                'filter.fromAccountFilter.marketIds': filterFromAccountFilterMarketIds,
                'filter.fromAccountFilter.accountTypes': filterFromAccountFilterAccountTypes,
                'filter.toAccountFilter.assetId': filterToAccountFilterAssetId,
                'filter.toAccountFilter.partyIds': filterToAccountFilterPartyIds,
                'filter.toAccountFilter.marketIds': filterToAccountFilterMarketIds,
                'filter.toAccountFilter.accountTypes': filterToAccountFilterAccountTypes,
                'filter.transferTypes': filterTransferTypes,
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

}

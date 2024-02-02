/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
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
 */
export enum vegaAccountType {
    ACCOUNT_TYPE_UNSPECIFIED = 'ACCOUNT_TYPE_UNSPECIFIED',
    ACCOUNT_TYPE_INSURANCE = 'ACCOUNT_TYPE_INSURANCE',
    ACCOUNT_TYPE_SETTLEMENT = 'ACCOUNT_TYPE_SETTLEMENT',
    ACCOUNT_TYPE_MARGIN = 'ACCOUNT_TYPE_MARGIN',
    ACCOUNT_TYPE_GENERAL = 'ACCOUNT_TYPE_GENERAL',
    ACCOUNT_TYPE_FEES_INFRASTRUCTURE = 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE',
    ACCOUNT_TYPE_FEES_LIQUIDITY = 'ACCOUNT_TYPE_FEES_LIQUIDITY',
    ACCOUNT_TYPE_FEES_MAKER = 'ACCOUNT_TYPE_FEES_MAKER',
    ACCOUNT_TYPE_BOND = 'ACCOUNT_TYPE_BOND',
    ACCOUNT_TYPE_EXTERNAL = 'ACCOUNT_TYPE_EXTERNAL',
    ACCOUNT_TYPE_GLOBAL_INSURANCE = 'ACCOUNT_TYPE_GLOBAL_INSURANCE',
    ACCOUNT_TYPE_GLOBAL_REWARD = 'ACCOUNT_TYPE_GLOBAL_REWARD',
    ACCOUNT_TYPE_PENDING_TRANSFERS = 'ACCOUNT_TYPE_PENDING_TRANSFERS',
    ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES = 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES',
    ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES = 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES',
    ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES = 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES',
    ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS = 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS',
    ACCOUNT_TYPE_HOLDING = 'ACCOUNT_TYPE_HOLDING',
    ACCOUNT_TYPE_LP_LIQUIDITY_FEES = 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES',
    ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION = 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION',
    ACCOUNT_TYPE_NETWORK_TREASURY = 'ACCOUNT_TYPE_NETWORK_TREASURY',
    ACCOUNT_TYPE_VESTING_REWARDS = 'ACCOUNT_TYPE_VESTING_REWARDS',
    ACCOUNT_TYPE_VESTED_REWARDS = 'ACCOUNT_TYPE_VESTED_REWARDS',
    ACCOUNT_TYPE_REWARD_AVERAGE_POSITION = 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION',
    ACCOUNT_TYPE_REWARD_RELATIVE_RETURN = 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN',
    ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY = 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY',
    ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING = 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING',
    ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD = 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD',
    ACCOUNT_TYPE_ORDER_MARGIN = 'ACCOUNT_TYPE_ORDER_MARGIN',
}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
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
 * - TRANSFER_TYPE_ORDER_MARGIN_LOW: Funds transferred from general account to meet order margin requirement in isolated margin mode.
 * - TRANSFER_TYPE_ORDER_MARGIN_HIGH: Excess order margin amount returned to general account.
 * - TRANSFER_TYPE_ISOLATED_MARGIN_LOW: Transfer from order margin account to margin account due to increase of position.
 * - TRANSFER_TYPE_ISOLATED_MARGIN_HIGH: Transfer from excess order margin account to general account.
 * - TRANSFER_TYPE_AMM_LOW: Transfer from a party's general account to their AMM's general account.
 * - TRANSFER_TYPE_AMM_HIGH: Transfer from an AMM's general account to their owner's general account.
 * - TRANSFER_TYPE_AMM_RELEASE: Transfer releasing an AMM's general account upon closure.
 */
export enum vegaTransferType {
    TRANSFER_TYPE_UNSPECIFIED = 'TRANSFER_TYPE_UNSPECIFIED',
    TRANSFER_TYPE_LOSS = 'TRANSFER_TYPE_LOSS',
    TRANSFER_TYPE_WIN = 'TRANSFER_TYPE_WIN',
    TRANSFER_TYPE_MTM_LOSS = 'TRANSFER_TYPE_MTM_LOSS',
    TRANSFER_TYPE_MTM_WIN = 'TRANSFER_TYPE_MTM_WIN',
    TRANSFER_TYPE_MARGIN_LOW = 'TRANSFER_TYPE_MARGIN_LOW',
    TRANSFER_TYPE_MARGIN_HIGH = 'TRANSFER_TYPE_MARGIN_HIGH',
    TRANSFER_TYPE_MARGIN_CONFISCATED = 'TRANSFER_TYPE_MARGIN_CONFISCATED',
    TRANSFER_TYPE_MAKER_FEE_PAY = 'TRANSFER_TYPE_MAKER_FEE_PAY',
    TRANSFER_TYPE_MAKER_FEE_RECEIVE = 'TRANSFER_TYPE_MAKER_FEE_RECEIVE',
    TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY = 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY',
    TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE = 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE',
    TRANSFER_TYPE_LIQUIDITY_FEE_PAY = 'TRANSFER_TYPE_LIQUIDITY_FEE_PAY',
    TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE = 'TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE',
    TRANSFER_TYPE_BOND_LOW = 'TRANSFER_TYPE_BOND_LOW',
    TRANSFER_TYPE_BOND_HIGH = 'TRANSFER_TYPE_BOND_HIGH',
    TRANSFER_TYPE_WITHDRAW = 'TRANSFER_TYPE_WITHDRAW',
    TRANSFER_TYPE_DEPOSIT = 'TRANSFER_TYPE_DEPOSIT',
    TRANSFER_TYPE_BOND_SLASHING = 'TRANSFER_TYPE_BOND_SLASHING',
    TRANSFER_TYPE_REWARD_PAYOUT = 'TRANSFER_TYPE_REWARD_PAYOUT',
    TRANSFER_TYPE_TRANSFER_FUNDS_SEND = 'TRANSFER_TYPE_TRANSFER_FUNDS_SEND',
    TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE = 'TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE',
    TRANSFER_TYPE_CLEAR_ACCOUNT = 'TRANSFER_TYPE_CLEAR_ACCOUNT',
    TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE',
    TRANSFER_TYPE_SPOT = 'TRANSFER_TYPE_SPOT',
    TRANSFER_TYPE_HOLDING_LOCK = 'TRANSFER_TYPE_HOLDING_LOCK',
    TRANSFER_TYPE_HOLDING_RELEASE = 'TRANSFER_TYPE_HOLDING_RELEASE',
    TRANSFER_TYPE_SUCCESSOR_INSURANCE_FRACTION = 'TRANSFER_TYPE_SUCCESSOR_INSURANCE_FRACTION',
    TRANSFER_TYPE_LIQUIDITY_FEE_ALLOCATE = 'TRANSFER_TYPE_LIQUIDITY_FEE_ALLOCATE',
    TRANSFER_TYPE_LIQUIDITY_FEE_NET_DISTRIBUTE = 'TRANSFER_TYPE_LIQUIDITY_FEE_NET_DISTRIBUTE',
    TRANSFER_TYPE_SLA_PENALTY_BOND_APPLY = 'TRANSFER_TYPE_SLA_PENALTY_BOND_APPLY',
    TRANSFER_TYPE_SLA_PENALTY_LP_FEE_APPLY = 'TRANSFER_TYPE_SLA_PENALTY_LP_FEE_APPLY',
    TRANSFER_TYPE_LIQUIDITY_FEE_UNPAID_COLLECT = 'TRANSFER_TYPE_LIQUIDITY_FEE_UNPAID_COLLECT',
    TRANSFER_TYPE_SLA_PERFORMANCE_BONUS_DISTRIBUTE = 'TRANSFER_TYPE_SLA_PERFORMANCE_BONUS_DISTRIBUTE',
    TRANSFER_TYPE_PERPETUALS_FUNDING_LOSS = 'TRANSFER_TYPE_PERPETUALS_FUNDING_LOSS',
    TRANSFER_TYPE_PERPETUALS_FUNDING_WIN = 'TRANSFER_TYPE_PERPETUALS_FUNDING_WIN',
    TRANSFER_TYPE_REWARDS_VESTED = 'TRANSFER_TYPE_REWARDS_VESTED',
    TRANSFER_TYPE_FEE_REFERRER_REWARD_PAY = 'TRANSFER_TYPE_FEE_REFERRER_REWARD_PAY',
    TRANSFER_TYPE_FEE_REFERRER_REWARD_DISTRIBUTE = 'TRANSFER_TYPE_FEE_REFERRER_REWARD_DISTRIBUTE',
    TRANSFER_TYPE_ORDER_MARGIN_LOW = 'TRANSFER_TYPE_ORDER_MARGIN_LOW',
    TRANSFER_TYPE_ORDER_MARGIN_HIGH = 'TRANSFER_TYPE_ORDER_MARGIN_HIGH',
    TRANSFER_TYPE_ISOLATED_MARGIN_LOW = 'TRANSFER_TYPE_ISOLATED_MARGIN_LOW',
    TRANSFER_TYPE_ISOLATED_MARGIN_HIGH = 'TRANSFER_TYPE_ISOLATED_MARGIN_HIGH',
    TRANSFER_TYPE_AMM_LOW = 'TRANSFER_TYPE_AMM_LOW',
    TRANSFER_TYPE_AMM_HIGH = 'TRANSFER_TYPE_AMM_HIGH',
    TRANSFER_TYPE_AMM_RELEASE = 'TRANSFER_TYPE_AMM_RELEASE',
}

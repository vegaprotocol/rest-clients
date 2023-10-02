/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1AuctionEvent } from './v1AuctionEvent';
import type { v1BeginBlock } from './v1BeginBlock';
import type { v1BusEventType } from './v1BusEventType';
import type { v1CheckpointEvent } from './v1CheckpointEvent';
import type { v1CoreSnapshotData } from './v1CoreSnapshotData';
import type { v1DelegationBalanceEvent } from './v1DelegationBalanceEvent';
import type { v1DistressedOrders } from './v1DistressedOrders';
import type { v1DistressedPositions } from './v1DistressedPositions';
import type { v1EndBlock } from './v1EndBlock';
import type { v1EpochEvent } from './v1EpochEvent';
import type { v1ERC20MultiSigSignerAdded } from './v1ERC20MultiSigSignerAdded';
import type { v1ERC20MultiSigSignerEvent } from './v1ERC20MultiSigSignerEvent';
import type { v1ERC20MultiSigSignerRemoved } from './v1ERC20MultiSigSignerRemoved';
import type { v1ERC20MultiSigThresholdSetEvent } from './v1ERC20MultiSigThresholdSetEvent';
import type { v1EthereumKeyRotation } from './v1EthereumKeyRotation';
import type { v1ExpiredOrders } from './v1ExpiredOrders';
import type { v1FundingPeriod } from './v1FundingPeriod';
import type { v1FundingPeriodDataPoint } from './v1FundingPeriodDataPoint';
import type { v1KeyRotation } from './v1KeyRotation';
import type { v1LedgerMovements } from './v1LedgerMovements';
import type { v1LossSocialization } from './v1LossSocialization';
import type { v1MarketEvent } from './v1MarketEvent';
import type { v1MarketTick } from './v1MarketTick';
import type { v1NodeSignature } from './v1NodeSignature';
import type { v1PartyActivityStreak } from './v1PartyActivityStreak';
import type { v1PositionResolution } from './v1PositionResolution';
import type { v1PositionStateEvent } from './v1PositionStateEvent';
import type { v1ProtocolUpgradeDataNodeReady } from './v1ProtocolUpgradeDataNodeReady';
import type { v1ProtocolUpgradeEvent } from './v1ProtocolUpgradeEvent';
import type { v1ProtocolUpgradeStarted } from './v1ProtocolUpgradeStarted';
import type { v1RefereeJoinedReferralSet } from './v1RefereeJoinedReferralSet';
import type { v1RefereeJoinedTeam } from './v1RefereeJoinedTeam';
import type { v1RefereeSwitchedTeam } from './v1RefereeSwitchedTeam';
import type { v1ReferralProgramEnded } from './v1ReferralProgramEnded';
import type { v1ReferralProgramStarted } from './v1ReferralProgramStarted';
import type { v1ReferralProgramUpdated } from './v1ReferralProgramUpdated';
import type { v1ReferralSetCreated } from './v1ReferralSetCreated';
import type { v1ReferralSetStatsUpdated } from './v1ReferralSetStatsUpdated';
import type { v1RewardPayoutEvent } from './v1RewardPayoutEvent';
import type { v1SettleDistressed } from './v1SettleDistressed';
import type { v1SettleMarket } from './v1SettleMarket';
import type { v1SettlePosition } from './v1SettlePosition';
import type { v1StakeLinking } from './v1StakeLinking';
import type { v1StateVar } from './v1StateVar';
import type { v1StopOrderEvent } from './v1StopOrderEvent';
import type { v1TeamCreated } from './v1TeamCreated';
import type { v1TeamUpdated } from './v1TeamUpdated';
import type { v1TimeUpdate } from './v1TimeUpdate';
import type { v1TransactionResult } from './v1TransactionResult';
import type { v1TxErrorEvent } from './v1TxErrorEvent';
import type { v1ValidatorRankingEvent } from './v1ValidatorRankingEvent';
import type { v1ValidatorScoreEvent } from './v1ValidatorScoreEvent';
import type { v1ValidatorUpdate } from './v1ValidatorUpdate';
import type { v1VestingStatsUpdated } from './v1VestingStatsUpdated';
import type { v1VolumeDiscountProgramEnded } from './v1VolumeDiscountProgramEnded';
import type { v1VolumeDiscountProgramStarted } from './v1VolumeDiscountProgramStarted';
import type { v1VolumeDiscountProgramUpdated } from './v1VolumeDiscountProgramUpdated';
import type { vegaAccount } from './vegaAccount';
import type { vegaAsset } from './vegaAsset';
import type { vegaDeposit } from './vegaDeposit';
import type { vegaeventsv1Transfer } from './vegaeventsv1Transfer';
import type { vegaLiquidityProvision } from './vegaLiquidityProvision';
import type { vegaMarginLevels } from './vegaMarginLevels';
import type { vegaMarket } from './vegaMarket';
import type { vegaMarketData } from './vegaMarketData';
import type { vegaNetworkLimits } from './vegaNetworkLimits';
import type { vegaNetworkParameter } from './vegaNetworkParameter';
import type { vegaOracleData } from './vegaOracleData';
import type { vegaOracleSpec } from './vegaOracleSpec';
import type { vegaOrder } from './vegaOrder';
import type { vegaParty } from './vegaParty';
import type { vegaProposal } from './vegaProposal';
import type { vegaRiskFactor } from './vegaRiskFactor';
import type { vegaTrade } from './vegaTrade';
import type { vegaVote } from './vegaVote';
import type { vegaWithdrawal } from './vegaWithdrawal';

export type v1BusEvent = {
    account?: vegaAccount;
    asset?: vegaAsset;
    auction?: v1AuctionEvent;
    beginBlock?: v1BeginBlock;
    block?: string;
    chainId?: string;
    checkpoint?: v1CheckpointEvent;
    coreSnapshotEvent?: v1CoreSnapshotData;
    delegationBalance?: v1DelegationBalanceEvent;
    deposit?: vegaDeposit;
    distressedOrders?: v1DistressedOrders;
    distressedPositions?: v1DistressedPositions;
    endBlock?: v1EndBlock;
    epochEvent?: v1EpochEvent;
    erc20MultisigSetThresholdEvent?: v1ERC20MultiSigThresholdSetEvent;
    erc20MultisigSignerAdded?: v1ERC20MultiSigSignerAdded;
    erc20MultisigSignerEvent?: v1ERC20MultiSigSignerEvent;
    erc20MultisigSignerRemoved?: v1ERC20MultiSigSignerRemoved;
    ethereumKeyRotation?: v1EthereumKeyRotation;
    expiredOrders?: v1ExpiredOrders;
    /**
     * Start or end of a funding period.
     */
    fundingPeriod?: v1FundingPeriod;
    /**
     * Data point within a funding period.
     */
    fundingPeriodDataPoint?: v1FundingPeriodDataPoint;
    id?: string;
    keyRotation?: v1KeyRotation;
    ledgerMovements?: v1LedgerMovements;
    liquidityProvision?: vegaLiquidityProvision;
    lossSocialization?: v1LossSocialization;
    marginLevels?: vegaMarginLevels;
    market?: v1MarketEvent;
    marketCreated?: vegaMarket;
    marketData?: vegaMarketData;
    marketTick?: v1MarketTick;
    marketUpdated?: vegaMarket;
    networkLimits?: vegaNetworkLimits;
    networkParameter?: vegaNetworkParameter;
    nodeSignature?: v1NodeSignature;
    oracleData?: vegaOracleData;
    oracleSpec?: vegaOracleSpec;
    order?: vegaOrder;
    party?: vegaParty;
    partyActivityStreak?: v1PartyActivityStreak;
    positionResolution?: v1PositionResolution;
    positionStateEvent?: v1PositionStateEvent;
    proposal?: vegaProposal;
    protocolUpgradeDataNodeReady?: v1ProtocolUpgradeDataNodeReady;
    protocolUpgradeEvent?: v1ProtocolUpgradeEvent;
    protocolUpgradeStarted?: v1ProtocolUpgradeStarted;
    rankingEvent?: v1ValidatorRankingEvent;
    /**
     * Event notifying a referee has joined a referral set.
     */
    refereeJoinedReferralSet?: v1RefereeJoinedReferralSet;
    /**
     * Event notifying that a referee joined a team.
     */
    refereeJoinedTeam?: v1RefereeJoinedTeam;
    /**
     * Event notifying that a referee switched teams.
     */
    refereeSwitchedTeam?: v1RefereeSwitchedTeam;
    /**
     * Event notifying that a referral program has ended.
     */
    referralProgramEnded?: v1ReferralProgramEnded;
    /**
     * Event notifying that a referral program has started.
     */
    referralProgramStarted?: v1ReferralProgramStarted;
    /**
     * Event notifying that a referral program has been updated.
     */
    referralProgramUpdated?: v1ReferralProgramUpdated;
    /**
     * Event notifying a referral set has been created.
     */
    referralSetCreated?: v1ReferralSetCreated;
    /**
     * Event notifying of an update to a referral set's statistics.
     */
    referralSetStatsUpdated?: v1ReferralSetStatsUpdated;
    rewardPayout?: v1RewardPayoutEvent;
    riskFactor?: vegaRiskFactor;
    settleDistressed?: v1SettleDistressed;
    settleMarket?: v1SettleMarket;
    settlePosition?: v1SettlePosition;
    stakeLinking?: v1StakeLinking;
    stateVar?: v1StateVar;
    stopOrder?: v1StopOrderEvent;
    teamCreated?: v1TeamCreated;
    /**
     * Event notifying of an update to a team.
     */
    teamUpdated?: v1TeamUpdated;
    timeUpdate?: v1TimeUpdate;
    trade?: vegaTrade;
    transactionResult?: v1TransactionResult;
    transfer?: vegaeventsv1Transfer;
    txErrEvent?: v1TxErrorEvent;
    txHash?: string;
    type?: v1BusEventType;
    validatorScore?: v1ValidatorScoreEvent;
    validatorUpdate?: v1ValidatorUpdate;
    version?: number;
    /**
     * Event notifying of an update to the vesting statistics.
     */
    vestingStatsUpdated?: v1VestingStatsUpdated;
    /**
     * Event notifying that a volume discount program has ended.
     */
    volumeDiscountProgramEnded?: v1VolumeDiscountProgramEnded;
    /**
     * Event notifying that a volume discount program has started.
     */
    volumeDiscountProgramStarted?: v1VolumeDiscountProgramStarted;
    /**
     * Event notifying that a volume discount program has been updated.
     */
    volumeDiscountProgramUpdated?: v1VolumeDiscountProgramUpdated;
    vote?: vegaVote;
    withdrawal?: vegaWithdrawal;
};


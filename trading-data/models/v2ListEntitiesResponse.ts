/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1EthereumKeyRotation } from './v1EthereumKeyRotation';
import type { v1KeyRotation } from './v1KeyRotation';
import type { v1NodeSignature } from './v1NodeSignature';
import type { v1ProtocolUpgradeEvent } from './v1ProtocolUpgradeEvent';
import type { v2AccountBalance } from './v2AccountBalance';
import type { v2ERC20MultiSigSignerAddedBundle } from './v2ERC20MultiSigSignerAddedBundle';
import type { v2ERC20MultiSigSignerRemovedBundle } from './v2ERC20MultiSigSignerRemovedBundle';
import type { v2NodeBasic } from './v2NodeBasic';
import type { vegaAccount } from './vegaAccount';
import type { vegaAsset } from './vegaAsset';
import type { vegaDelegation } from './vegaDelegation';
import type { vegaDeposit } from './vegaDeposit';
import type { vegaeventsv1Transfer } from './vegaeventsv1Transfer';
import type { vegaLedgerEntry } from './vegaLedgerEntry';
import type { vegaLiquidityProvision } from './vegaLiquidityProvision';
import type { vegaMarginLevels } from './vegaMarginLevels';
import type { vegaMarket } from './vegaMarket';
import type { vegaNetworkParameter } from './vegaNetworkParameter';
import type { vegaOracleData } from './vegaOracleData';
import type { vegaOracleSpec } from './vegaOracleSpec';
import type { vegaOrder } from './vegaOrder';
import type { vegaParty } from './vegaParty';
import type { vegaPosition } from './vegaPosition';
import type { vegaProposal } from './vegaProposal';
import type { vegaReward } from './vegaReward';
import type { vegaTrade } from './vegaTrade';
import type { vegaVote } from './vegaVote';
import type { vegaWithdrawal } from './vegaWithdrawal';

export type v2ListEntitiesResponse = {
    accounts?: Array<vegaAccount>;
    assets?: Array<vegaAsset>;
    balanceChanges?: Array<v2AccountBalance>;
    delegations?: Array<vegaDelegation>;
    deposits?: Array<vegaDeposit>;
    erc20MultiSigSignerAddedBundles?: Array<v2ERC20MultiSigSignerAddedBundle>;
    erc20MultiSigSignerRemovedBundles?: Array<v2ERC20MultiSigSignerRemovedBundle>;
    ethereumKeyRotations?: Array<v1EthereumKeyRotation>;
    keyRotations?: Array<v1KeyRotation>;
    ledgerEntries?: Array<vegaLedgerEntry>;
    liquidityProvisions?: Array<vegaLiquidityProvision>;
    marginLevels?: Array<vegaMarginLevels>;
    markets?: Array<vegaMarket>;
    networkParameters?: Array<vegaNetworkParameter>;
    nodeSignatures?: Array<v1NodeSignature>;
    nodes?: Array<v2NodeBasic>;
    oracleData?: Array<vegaOracleData>;
    oracleSpecs?: Array<vegaOracleSpec>;
    orders?: Array<vegaOrder>;
    parties?: Array<vegaParty>;
    positions?: Array<vegaPosition>;
    proposals?: Array<vegaProposal>;
    protocolUpgradeProposals?: Array<v1ProtocolUpgradeEvent>;
    rewards?: Array<vegaReward>;
    trades?: Array<vegaTrade>;
    transfers?: Array<vegaeventsv1Transfer>;
    votes?: Array<vegaVote>;
    withdrawals?: Array<vegaWithdrawal>;
};


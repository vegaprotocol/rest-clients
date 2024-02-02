/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1CancelTransfer } from './commandsv1CancelTransfer';
import type { commandsv1Transfer } from './commandsv1Transfer';
import type { v1AnnounceNode } from './v1AnnounceNode';
import type { v1ApplyReferralCode } from './v1ApplyReferralCode';
import type { v1BatchMarketInstructions } from './v1BatchMarketInstructions';
import type { v1BatchProposalSubmission } from './v1BatchProposalSubmission';
import type { v1ChainEvent } from './v1ChainEvent';
import type { v1CreateReferralSet } from './v1CreateReferralSet';
import type { v1DelegateSubmission } from './v1DelegateSubmission';
import type { v1EthereumKeyRotateSubmission } from './v1EthereumKeyRotateSubmission';
import type { v1IssueSignatures } from './v1IssueSignatures';
import type { v1JoinTeam } from './v1JoinTeam';
import type { v1KeyRotateSubmission } from './v1KeyRotateSubmission';
import type { v1LiquidityProvisionAmendment } from './v1LiquidityProvisionAmendment';
import type { v1LiquidityProvisionCancellation } from './v1LiquidityProvisionCancellation';
import type { v1LiquidityProvisionSubmission } from './v1LiquidityProvisionSubmission';
import type { v1NodeSignature } from './v1NodeSignature';
import type { v1NodeVote } from './v1NodeVote';
import type { v1OracleDataSubmission } from './v1OracleDataSubmission';
import type { v1OrderAmendment } from './v1OrderAmendment';
import type { v1OrderCancellation } from './v1OrderCancellation';
import type { v1OrderSubmission } from './v1OrderSubmission';
import type { v1ProposalSubmission } from './v1ProposalSubmission';
import type { v1ProtocolUpgradeProposal } from './v1ProtocolUpgradeProposal';
import type { v1StateVariableProposal } from './v1StateVariableProposal';
import type { v1StopOrdersCancellation } from './v1StopOrdersCancellation';
import type { v1StopOrdersSubmission } from './v1StopOrdersSubmission';
import type { v1UndelegateSubmission } from './v1UndelegateSubmission';
import type { v1UpdateMarginMode } from './v1UpdateMarginMode';
import type { v1UpdatePartyProfile } from './v1UpdatePartyProfile';
import type { v1UpdateReferralSet } from './v1UpdateReferralSet';
import type { v1ValidatorHeartbeat } from './v1ValidatorHeartbeat';
import type { v1VoteSubmission } from './v1VoteSubmission';
import type { v1WithdrawSubmission } from './v1WithdrawSubmission';

/**
 * Input data for a transaction containing a network command for the Vega network to execute.
 * Once populated the protobuf message should be marshalled into a byte array and included in a transaction message.
 */
export type v1InputData = {
    /**
     * Command used by a node operator to announce its node as a pending validator.
     */
    announceNode?: v1AnnounceNode;
    /**
     * Command to apply a referral code.
     */
    applyReferralCode?: v1ApplyReferralCode;
    /**
     * Command to submit a batch of order instructions.
     */
    batchMarketInstructions?: v1BatchMarketInstructions;
    /**
     * Command to submit a batch governance proposal.
     */
    batchProposalSubmission?: v1BatchProposalSubmission;
    /**
     * Block height which has been used to calculate the transaction proof-of-work.
     */
    blockHeight?: string;
    /**
     * Command to cancel a recurring transfer.
     */
    cancelTransfer?: commandsv1CancelTransfer;
    /**
     * Validator command sent automatically to notify the Vega chain of an off-chain event.
     */
    chainEvent?: v1ChainEvent;
    /**
     * Command to create a referral set.
     */
    createReferralSet?: v1CreateReferralSet;
    /**
     * Command to delegate tokens to a validator.
     */
    delegateSubmission?: v1DelegateSubmission;
    /**
     * Validator command sent manually by a node operator to rotate their node's Ethereum keys.
     */
    ethereumKeyRotateSubmission?: v1EthereumKeyRotateSubmission;
    /**
     * Command to request signatures to amend the multisig-control contract.
     */
    issueSignatures?: v1IssueSignatures;
    /**
     * Command to join a team.
     */
    joinTeam?: v1JoinTeam;
    /**
     * Validator command sent manually by a node operator to rotate their node's Vega keys.
     */
    keyRotateSubmission?: v1KeyRotateSubmission;
    /**
     * Command to amend a liquidity commitment.
     */
    liquidityProvisionAmendment?: v1LiquidityProvisionAmendment;
    /**
     * Command to cancel a liquidity commitment.
     */
    liquidityProvisionCancellation?: v1LiquidityProvisionCancellation;
    /**
     * Command to submit a liquidity commitment.
     */
    liquidityProvisionSubmission?: v1LiquidityProvisionSubmission;
    /**
     * Validator command sent automatically to provide signatures for the Ethereum bridge.
     */
    nodeSignature?: v1NodeSignature;
    /**
     * Validator command sent automatically to vote on that validity of an external resource.
     */
    nodeVote?: v1NodeVote;
    /**
     * Arbitrary number used to provide uniqueness to the signature of two otherwise identical input data, preventing replay attacks.
     * Must be set to a different value for all new transactions sent by a party. It is advised to generate this number randomly.
     */
    nonce?: string;
    /**
     * Command to submit external oracle data.
     */
    oracleDataSubmission?: v1OracleDataSubmission;
    /**
     * Command to amend an order.
     */
    orderAmendment?: v1OrderAmendment;
    /**
     * Command to cancel an order.
     */
    orderCancellation?: v1OrderCancellation;
    /**
     * Command to submit an order.
     */
    orderSubmission?: v1OrderSubmission;
    /**
     * Command to submit a governance proposal.
     */
    proposalSubmission?: v1ProposalSubmission;
    /**
     * Validator command sent manually to propose a protocol upgrade.
     */
    protocolUpgradeProposal?: v1ProtocolUpgradeProposal;
    /**
     * Validator command sent automatically to reach consensus on floating point values.
     */
    stateVariableProposal?: v1StateVariableProposal;
    /**
     * Command to cancel stop orders.
     */
    stopOrdersCancellation?: v1StopOrdersCancellation;
    /**
     * Command to submit a pair of stop orders.
     */
    stopOrdersSubmission?: v1StopOrdersSubmission;
    /**
     * Command to submit a transfer.
     */
    transfer?: commandsv1Transfer;
    /**
     * Command to remove tokens delegated to a validator.
     */
    undelegateSubmission?: v1UndelegateSubmission;
    /**
     * Command to update the margin mode of a party in a market.
     */
    updateMarginMode?: v1UpdateMarginMode;
    /**
     * Command to update a party's profile.
     */
    updatePartyProfile?: v1UpdatePartyProfile;
    /**
     * Command to update a referral set.
     */
    updateReferralSet?: v1UpdateReferralSet;
    /**
     * Validator command sent automatically to signal regular participation in the network.
     */
    validatorHeartbeat?: v1ValidatorHeartbeat;
    /**
     * Command to submit a vote on a governance proposal.
     */
    voteSubmission?: v1VoteSubmission;
    /**
     * Command to submit a withdrawal.
     */
    withdrawSubmission?: v1WithdrawSubmission;
};


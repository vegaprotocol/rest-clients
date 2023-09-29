/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1CancelTransfer } from './commandsv1CancelTransfer';
import type { commandsv1Transfer } from './commandsv1Transfer';
import type { v1AnnounceNode } from './v1AnnounceNode';
import type { v1ApplyReferralCode } from './v1ApplyReferralCode';
import type { v1BatchMarketInstructions } from './v1BatchMarketInstructions';
import type { v1ChainEvent } from './v1ChainEvent';
import type { v1CreateReferralSet } from './v1CreateReferralSet';
import type { v1DelegateSubmission } from './v1DelegateSubmission';
import type { v1EthereumKeyRotateSubmission } from './v1EthereumKeyRotateSubmission';
import type { v1IssueSignatures } from './v1IssueSignatures';
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
import type { v1UpdateReferralSet } from './v1UpdateReferralSet';
import type { v1ValidatorHeartbeat } from './v1ValidatorHeartbeat';
import type { v1VoteSubmission } from './v1VoteSubmission';
import type { v1WithdrawSubmission } from './v1WithdrawSubmission';

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
     * Command to submit a batch of order instructions to a market.
     */
    batchMarketInstructions?: v1BatchMarketInstructions;
    /**
     * Block height at which the transaction was made.
     * This should be the current block height. The transaction will be valid
     * from the block and up to the `tolerance` block height.
     * Example: If the network has a tolerance of 150 blocks and `block_height`
     * is set to `200`, then the transaction will be valid until block `350`.
     * Note that a `block_height` that is ahead of the real block height will be
     * rejected. The tolerance can be queried from the chain's network parameters.
     * `block_height` prevents replay attacks in conjunction with `nonce` (see above).
     */
    blockHeight?: string;
    /**
     * Command to request cancelling a recurring transfer.
     */
    cancelTransfer?: commandsv1CancelTransfer;
    /**
     * Command used by a validator to submit an event forwarded to the Vega network to provide information
     * on events happening on other networks, to be used by a foreign chain
     * to recognise a decision taken by the Vega network.
     */
    chainEvent?: v1ChainEvent;
    /**
     * Command to create a team.
     */
    createReferralSet?: v1CreateReferralSet;
    /**
     * Command to delegate tokens to a validator.
     */
    delegateSubmission?: v1DelegateSubmission;
    /**
     * Command used by a validator to allow given validator to rotate their Ethereum keys.
     */
    ethereumKeyRotateSubmission?: v1EthereumKeyRotateSubmission;
    /**
     * Command used by a validator to submit signatures to a smart contract.
     */
    issueSignatures?: v1IssueSignatures;
    /**
     * Command used by a validator to allow given validator to rotate their Vega keys.
     */
    keyRotateSubmission?: v1KeyRotateSubmission;
    /**
     * Command to request amending a liquidity commitment.
     */
    liquidityProvisionAmendment?: v1LiquidityProvisionAmendment;
    /**
     * Command to request cancelling a liquidity commitment.
     */
    liquidityProvisionCancellation?: v1LiquidityProvisionCancellation;
    /**
     * Command to submit a liquidity commitment.
     */
    liquidityProvisionSubmission?: v1LiquidityProvisionSubmission;
    /**
     * Command used by a validator to submit a signature, to be used by a foreign chain to recognise a decision taken by the Vega network.
     */
    nodeSignature?: v1NodeSignature;
    /**
     * Command used by a validator when a node votes for validating that a given resource exists or is valid,
     * for example, an ERC20 deposit is valid and exists on ethereum.
     */
    nodeVote?: v1NodeVote;
    /**
     * Number to provide uniqueness to prevent accidental replays and,
     * in combination with `block_height`, deliberate attacks.
     * A nonce provides uniqueness for otherwise identical transactions,
     * ensuring that the transaction hash uniquely identifies a specific transaction.
     * Granted all other fields are equal, the nonce can either be a counter
     * or generated at random to submit multiple transactions within the same
     * block (see below), without being identified as replays.
     * Please note that Protocol Buffers do not have a canonical, unique encoding
     * and therefore different libraries or binaries may encode the same message
     * slightly differently, causing a different hash.
     */
    nonce?: string;
    /**
     * Command to submit new oracle data from third party providers.
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
     * Command for submitting an order.
     */
    orderSubmission?: v1OrderSubmission;
    /**
     * Command to submit a governance proposal.
     */
    proposalSubmission?: v1ProposalSubmission;
    /**
     * Command used by a validator to propose a protocol upgrade.
     */
    protocolUpgradeProposal?: v1ProtocolUpgradeProposal;
    /**
     * Command used by a validator to submit a floating point value.
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
     * Command to update a referral set.
     */
    updateReferralSet?: v1UpdateReferralSet;
    /**
     * Command used by a validator to signal they are still online and validating blocks
     * or ready to validate blocks when they are still a pending validator.
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


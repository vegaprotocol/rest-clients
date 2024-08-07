/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1CancelTransfer } from './commandsv1CancelTransfer';
import type { TransactionResultFailureDetails } from './TransactionResultFailureDetails';
import type { TransactionResultSuccessDetails } from './TransactionResultSuccessDetails';
import type { v1AmendAMM } from './v1AmendAMM';
import type { v1AnnounceNode } from './v1AnnounceNode';
import type { v1ApplyReferralCode } from './v1ApplyReferralCode';
import type { v1BatchMarketInstructions } from './v1BatchMarketInstructions';
import type { v1BatchProposalSubmission } from './v1BatchProposalSubmission';
import type { v1CancelAMM } from './v1CancelAMM';
import type { v1CreateReferralSet } from './v1CreateReferralSet';
import type { v1DelegateSubmission } from './v1DelegateSubmission';
import type { v1EthereumKeyRotateSubmission } from './v1EthereumKeyRotateSubmission';
import type { v1IssueSignatures } from './v1IssueSignatures';
import type { v1JoinTeam } from './v1JoinTeam';
import type { v1KeyRotateSubmission } from './v1KeyRotateSubmission';
import type { v1LiquidityProvisionAmendment } from './v1LiquidityProvisionAmendment';
import type { v1LiquidityProvisionCancellation } from './v1LiquidityProvisionCancellation';
import type { v1LiquidityProvisionSubmission } from './v1LiquidityProvisionSubmission';
import type { v1OracleDataSubmission } from './v1OracleDataSubmission';
import type { v1OrderAmendment } from './v1OrderAmendment';
import type { v1OrderCancellation } from './v1OrderCancellation';
import type { v1OrderSubmission } from './v1OrderSubmission';
import type { v1ProposalSubmission } from './v1ProposalSubmission';
import type { v1ProtocolUpgradeProposal } from './v1ProtocolUpgradeProposal';
import type { v1StopOrdersCancellation } from './v1StopOrdersCancellation';
import type { v1StopOrdersSubmission } from './v1StopOrdersSubmission';
import type { v1SubmitAMM } from './v1SubmitAMM';
import type { v1UndelegateSubmission } from './v1UndelegateSubmission';
import type { v1UpdateMarginMode } from './v1UpdateMarginMode';
import type { v1UpdatePartyProfile } from './v1UpdatePartyProfile';
import type { v1UpdateReferralSet } from './v1UpdateReferralSet';
import type { v1VoteSubmission } from './v1VoteSubmission';
import type { v1WithdrawSubmission } from './v1WithdrawSubmission';
import type { vegacommandsv1Transfer } from './vegacommandsv1Transfer';

export type v1TransactionResult = {
    amendAmm?: v1AmendAMM;
    announceNode?: v1AnnounceNode;
    applyReferralCode?: v1ApplyReferralCode;
    batchMarketInstructions?: v1BatchMarketInstructions;
    batchProposal?: v1BatchProposalSubmission;
    cancelAmm?: v1CancelAMM;
    cancelTransfer?: commandsv1CancelTransfer;
    createReferralSet?: v1CreateReferralSet;
    delegateSubmission?: v1DelegateSubmission;
    ethereumKeyRotateSubmission?: v1EthereumKeyRotateSubmission;
    failure?: TransactionResultFailureDetails;
    hash?: string;
    issueSignatures?: v1IssueSignatures;
    joinTeam?: v1JoinTeam;
    keyRotateSubmission?: v1KeyRotateSubmission;
    liquidityProvisionAmendment?: v1LiquidityProvisionAmendment;
    liquidityProvisionCancellation?: v1LiquidityProvisionCancellation;
    liquidityProvisionSubmission?: v1LiquidityProvisionSubmission;
    oracleDataSubmission?: v1OracleDataSubmission;
    orderAmendment?: v1OrderAmendment;
    orderCancellation?: v1OrderCancellation;
    orderSubmission?: v1OrderSubmission;
    partyId?: string;
    proposal?: v1ProposalSubmission;
    protocolUpgradeProposal?: v1ProtocolUpgradeProposal;
    /**
     * Status of the transaction, did it succeed or an error was raised.
     */
    status?: boolean;
    stopOrdersCancellation?: v1StopOrdersCancellation;
    stopOrdersSubmission?: v1StopOrdersSubmission;
    submitAmm?: v1SubmitAMM;
    success?: TransactionResultSuccessDetails;
    transfer?: vegacommandsv1Transfer;
    undelegateSubmission?: v1UndelegateSubmission;
    updateMarginMode?: v1UpdateMarginMode;
    updatePartyProfile?: v1UpdatePartyProfile;
    updateReferralSet?: v1UpdateReferralSet;
    voteSubmission?: v1VoteSubmission;
    withdrawSubmission?: v1WithdrawSubmission;
};


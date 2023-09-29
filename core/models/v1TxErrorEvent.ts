/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { commandsv1CancelTransfer } from './commandsv1CancelTransfer';
import type { v1AnnounceNode } from './v1AnnounceNode';
import type { v1BatchMarketInstructions } from './v1BatchMarketInstructions';
import type { v1DelegateSubmission } from './v1DelegateSubmission';
import type { v1IssueSignatures } from './v1IssueSignatures';
import type { v1LiquidityProvisionAmendment } from './v1LiquidityProvisionAmendment';
import type { v1LiquidityProvisionCancellation } from './v1LiquidityProvisionCancellation';
import type { v1LiquidityProvisionSubmission } from './v1LiquidityProvisionSubmission';
import type { v1OracleDataSubmission } from './v1OracleDataSubmission';
import type { v1OrderAmendment } from './v1OrderAmendment';
import type { v1OrderCancellation } from './v1OrderCancellation';
import type { v1OrderSubmission } from './v1OrderSubmission';
import type { v1ProposalSubmission } from './v1ProposalSubmission';
import type { v1ProtocolUpgradeProposal } from './v1ProtocolUpgradeProposal';
import type { v1UndelegateSubmission } from './v1UndelegateSubmission';
import type { v1VoteSubmission } from './v1VoteSubmission';
import type { v1WithdrawSubmission } from './v1WithdrawSubmission';
import type { vegacommandsv1Transfer } from './vegacommandsv1Transfer';

export type v1TxErrorEvent = {
    announceNode?: v1AnnounceNode;
    batchMarketInstructions?: v1BatchMarketInstructions;
    cancelTransfer?: commandsv1CancelTransfer;
    delegateSubmission?: v1DelegateSubmission;
    errMsg?: string;
    issueSignatures?: v1IssueSignatures;
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
    transfer?: vegacommandsv1Transfer;
    undelegateSubmission?: v1UndelegateSubmission;
    voteSubmission?: v1VoteSubmission;
    withdrawSubmission?: v1WithdrawSubmission;
};


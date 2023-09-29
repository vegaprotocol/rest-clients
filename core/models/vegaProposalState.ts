/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - STATE_UNSPECIFIED: Default value, always invalid
 * - STATE_FAILED: Proposal enactment has failed - even though proposal has passed, its execution could not be performed
 * - STATE_OPEN: Proposal is open for voting
 * - STATE_PASSED: Proposal has gained enough support to be executed
 * - STATE_REJECTED: Proposal wasn't accepted i.e. proposal terms failed validation due to wrong configuration or failed to meet network requirements.
 * - STATE_DECLINED: Proposal didn't get enough votes, e.g. either failed to gain required participation or majority level.
 * - STATE_ENACTED: Proposal enacted
 * - STATE_WAITING_FOR_NODE_VOTE: Waiting for node validation of the proposal
 */
export enum vegaProposalState {
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED',
    STATE_FAILED = 'STATE_FAILED',
    STATE_OPEN = 'STATE_OPEN',
    STATE_PASSED = 'STATE_PASSED',
    STATE_REJECTED = 'STATE_REJECTED',
    STATE_DECLINED = 'STATE_DECLINED',
    STATE_ENACTED = 'STATE_ENACTED',
    STATE_WAITING_FOR_NODE_VOTE = 'STATE_WAITING_FOR_NODE_VOTE',
}

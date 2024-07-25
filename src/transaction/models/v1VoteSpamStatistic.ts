/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Vote statistics for the voting spam policies
 * which are calculated as a ratio of the total votes
 * that have been rejected.
 */
export type v1VoteSpamStatistic = {
    countForEpoch?: string;
    minTokensRequired?: string;
    /**
     * Unique ID of the proposal being voted on by the party.
     */
    proposal?: string;
};


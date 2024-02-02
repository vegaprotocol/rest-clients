/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PoWStatistic } from './v1PoWStatistic';
import type { v1SpamStatistic } from './v1SpamStatistic';
import type { v1VoteSpamStatistics } from './v1VoteSpamStatistics';

export type v1SpamStatistics = {
    /**
     * Statistics for transactions made by the party to apply referral codes.
     */
    applyReferralCode?: v1SpamStatistic;
    /**
     * Statistics for transactions made by the party to create referral sets.
     */
    createReferralSet?: v1SpamStatistic;
    /**
     * Statistics for delegation transactions made by the party.
     */
    delegations?: v1SpamStatistic;
    /**
     * Epoch in which these statistics apply to.
     */
    epochSeq?: string;
    /**
     * Statistics for multisig signatures issued for the party.
     */
    issueSignatures?: v1SpamStatistic;
    /**
     * Statistics for node announcement transactions made by the party.
     */
    nodeAnnouncements?: v1SpamStatistic;
    /**
     * Statistics for proof of work difficulty observed per block for the party.
     */
    pow?: v1PoWStatistic;
    /**
     * Statistics for proposal transactions made by the party.
     */
    proposals?: v1SpamStatistic;
    /**
     * Statistics for transfer transactions made by the party.
     */
    transfers?: v1SpamStatistic;
    /**
     * Statistics for transactions made by the party to update referral sets.
     */
    updateReferralSet?: v1SpamStatistic;
    /**
     * Statistics for proposal votes made by the party.
     */
    votes?: v1VoteSpamStatistics;
};


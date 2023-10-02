/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PoWStatistic } from './v1PoWStatistic';
import type { v1SpamStatistic } from './v1SpamStatistic';
import type { v1VoteSpamStatistics } from './v1VoteSpamStatistics';

export type v1SpamStatistics = {
    delegations?: v1SpamStatistic;
    epochSeq?: string;
    issueSignatures?: v1SpamStatistic;
    nodeAnnouncements?: v1SpamStatistic;
    pow?: v1PoWStatistic;
    proposals?: v1SpamStatistic;
    transfers?: v1SpamStatistic;
    votes?: v1VoteSpamStatistics;
};


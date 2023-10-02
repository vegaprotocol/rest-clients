/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1CreateReferralSetTeam } from './v1CreateReferralSetTeam';

/**
 * Creates a referral set. The creator automatically becomes
 * the leader, called a referrer. This cannot be changed.
 * A referrer cannot be part of an existing set as referrer or referee.
 */
export type v1CreateReferralSet = {
    isTeam?: boolean;
    team?: v1CreateReferralSetTeam;
};


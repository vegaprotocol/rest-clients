/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1CreateReferralSetTeam } from './v1CreateReferralSetTeam';

/**
 * Command that a party can use to instruct the network to create a new referral set on the network.
 * The submitter of this command will become the referrer of the new set and cannot be the referrer or a referee of another set.
 * A referrer can use the referral set ID as a referral code to attract others to the Vega network and have fees reduced for the referral set.
 */
export type v1CreateReferralSet = {
    /**
     * Whether or not the referral set should be considered a team that can participate in team games on the network.
     */
    isTeam?: boolean;
    /**
     * Team details, if the referral set is to be considered a team.
     */
    team?: v1CreateReferralSetTeam;
};


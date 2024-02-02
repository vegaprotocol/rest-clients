/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1UpdateReferralSetTeam } from './v1UpdateReferralSetTeam';

/**
 * A command that allows the referrer of a referral set to update team details for a referral set.
 * Any field that is left unset or has a default value indicates that this field on the original referral set will be left unchanged.
 */
export type v1UpdateReferralSet = {
    /**
     * ID of the referral set to update.
     */
    id?: string;
    /**
     * Whether or not the referral set should be considered a team that can participate in team games on the network.
     */
    isTeam?: boolean;
    /**
     * Team details, if the referral set is to be considered a team.
     */
    team?: v1UpdateReferralSetTeam;
};


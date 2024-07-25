/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Command that allows the submitter to join a referral set and earn a collective reduction in fees based on the activity of all members of that set.
 * A party that joins a referral set is called a referee. A referee can only be a member of one referral set and cannot themselves be or become a referrer.
 * To switch to another referral set, a subsequent command can be sent and the switch will take effect at the end of the epoch.
 */
export type v1ApplyReferralCode = {
    /**
     * Referral code, normally the referral set ID, for the party to join.
     */
    id?: string;
};


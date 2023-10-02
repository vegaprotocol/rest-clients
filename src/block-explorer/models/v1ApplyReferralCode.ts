/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A party that joins a referral team is called a referee. A referee cannot
 * create a referral set or join multiple sets.
 * To switch, the referee can ask to join another set, and the switch will
 * be effective at the end of the epoch.
 */
export type v1ApplyReferralCode = {
    /**
     * Referral code for the set to join.
     */
    id?: string;
};


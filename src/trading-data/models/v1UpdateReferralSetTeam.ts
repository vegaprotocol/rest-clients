/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1UpdateReferralSetTeam = {
    /**
     * List of public keys that are allowed to join the team.
     * Only applicable to closed teams. Removing a party from the allow list does not remove
     * the party from the team.
     */
    allowList?: Array<string>;
    /**
     * New link to an avatar for the team.
     */
    avatarUrl?: string;
    /**
     * Whether or not the team is closed to new party members. When closed, only parties specified in the allow list can
     * join the team.
     */
    closed?: boolean;
    /**
     * New name of the team.
     */
    name?: string;
    /**
     * New link to the team's homepage.
     */
    teamUrl?: string;
};


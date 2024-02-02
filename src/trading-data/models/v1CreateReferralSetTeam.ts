/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1CreateReferralSetTeam = {
    /**
     * List of public keys that are allowed to join the team.
     * Only applicable to closed teams. Removing a party from the allow list does not remove
     * the party from the team.
     */
    allowList?: Array<string>;
    /**
     * External link to an avatar for the team.
     */
    avatarUrl?: string;
    /**
     * Whether or not the team is closed to new party members.
     */
    closed?: boolean;
    /**
     * Name of the team.
     */
    name?: string;
    /**
     * External link to the team's homepage.
     */
    teamUrl?: string;
};


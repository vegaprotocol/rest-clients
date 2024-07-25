/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1TeamUpdated = {
    /**
     * List of public keys that are allowed to join the team.
     */
    allowList?: Array<string>;
    /**
     * Link to an image of the team's avatar.
     */
    avatarUrl?: string;
    /**
     * Tells if a party can join the team or not.
     */
    closed?: boolean;
    /**
     * Name of the team.
     */
    name?: string;
    /**
     * The unique identifier for the updated team.
     */
    teamId?: string;
    /**
     * Link to the team's homepage.
     */
    teamUrl?: string;
};


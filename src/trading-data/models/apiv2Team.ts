/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Team record containing the team information.
 */
export type apiv2Team = {
    /**
     * Link to an image of the team's avatar.
     */
    avatarUrl?: string;
    /**
     * Tells if a party can join the team or not.
     */
    closed?: boolean;
    /**
     * Time in Unix nanoseconds when the team was created.
     */
    createdAt?: string;
    /**
     * Epoch at which the team was created.
     */
    createdAtEpoch?: string;
    /**
     * Name of the team.
     */
    name?: string;
    /**
     * Party ID that created the team.
     */
    referrer?: string;
    /**
     * ID of the created team.
     */
    teamId?: string;
    /**
     * Link to the team's homepage.
     */
    teamUrl?: string;
};


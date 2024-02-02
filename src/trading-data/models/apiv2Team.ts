/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Team record containing the team information.
 */
export type apiv2Team = {
    /**
     * List of public keys that are allowed to join the team.
     * Only applicable to closed teams.
     */
    allowList?: Array<string>;
    /**
     * Link to an image of the team's avatar.
     */
    avatarUrl?: string;
    /**
     * Whether or not the team is closed to new party members. When closed, only parties specified in the allow list can
     * join the team.
     */
    closed?: boolean;
    /**
     * Timestamp in Unix nanoseconds when the team was created.
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


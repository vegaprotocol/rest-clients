/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1TeamCreated = {
    /**
     * Epoch at which the team was created.
     */
    atEpoch?: string;
    /**
     * Link to an image of the team's avatar.
     */
    avatarUrl?: string;
    /**
     * Tells if a party can join the team or not.
     */
    closed?: boolean;
    /**
     * Time in Unix nanoseconds when the team is created.
     */
    createdAt?: string;
    /**
     * Name of the team.
     */
    name?: string;
    /**
     * The party that created the team.
     */
    referrer?: string;
    /**
     * The unique identifier of the created team.
     */
    teamId?: string;
    /**
     * Link to the team's homepage.
     */
    teamUrl?: string;
};


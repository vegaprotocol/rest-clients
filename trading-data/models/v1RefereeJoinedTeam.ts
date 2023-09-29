/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1RefereeJoinedTeam = {
    /**
     * Epoch at which the party joined the team.
     */
    atEpoch?: string;
    /**
     * Time in Unix nanoseconds when the party joined a team.
     */
    joinedAt?: string;
    /**
     * The party that joined the team.
     */
    referee?: string;
    /**
     * The unique identifier of the team the referee joined.
     */
    teamId?: string;
};


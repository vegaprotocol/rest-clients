/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v1RefereeSwitchedTeam = {
    /**
     * Epoch at which the party switched the team.
     */
    atEpoch?: string;
    /**
     * The unique identifier of the team the referee left.
     */
    fromTeamId?: string;
    /**
     * The party that switched team.
     */
    referee?: string;
    /**
     * Time in Unix nanoseconds when the party switched team. This time acts as
     * the joining time.
     */
    switchedAt?: string;
    /**
     * The unique identifier of the team joined.
     */
    toTeamId?: string;
};


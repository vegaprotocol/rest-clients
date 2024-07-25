/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GameTeamScoresFilter = {
    /**
     * Restrict game scores to those from a given epoch.
     */
    epochFrom?: string;
    /**
     * Restrict game scores to those up to a given epoch.
     */
    epochTo?: string;
    /**
     * Restrict game scores to the given ones.
     */
    gameIds?: Array<string>;
    /**
     * Restrict game scores to those for the given teams.
     */
    teamIds?: Array<string>;
};


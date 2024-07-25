/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type v2GamePartyScoresFilter = {
    /**
     * Restrict game scores to those from a given epoch.
     */
    epochFrom?: string;
    /**
     * Restrict game scores to those up to a given epoch.
     */
    epochTo?: string;
    /**
     * Restrict game scores to those in the given games.
     */
    gameIds?: Array<string>;
    /**
     * Restrict game scores to those relating to the given parties.
     */
    partyIds?: Array<string>;
    /**
     * Restrict game scores to the parties in the given teams.
     */
    teamIds?: Array<string>;
};


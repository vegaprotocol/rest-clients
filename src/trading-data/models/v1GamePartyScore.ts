/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Scores per party per game with eligibility context.
 */
export type v1GamePartyScore = {
    /**
     * Epoch when these scores were generated.
     */
    epoch?: string;
    /**
     * Game ID.
     */
    gameId?: string;
    /**
     * If the party is eligible for a reward for this game based on the current information.
     */
    isEligible?: boolean;
    /**
     * Party's current open volume. Only populated if the game has a requirement for it.
     */
    openVolume?: string;
    /**
     * The party ID.
     */
    party?: string;
    /**
     * If the party is a member of a team, this is their relative position in the sorting order of the team.
     * Empty if not a team, or if the party is not eligible.
     */
    rank?: string;
    /**
     * Party's current score in the game.
     */
    score?: string;
    /**
     * Party's current staking balance. Only populated if the game has a requirement for it.
     */
    stakingBalance?: string;
    /**
     * Team the party belongs to. Unset if the party is not part of a team.
     */
    teamId?: string;
    /**
     * Timestamp in Unix nanoseconds when these scores were generated.
     */
    time?: string;
    /**
     * Total fees paid by the party during the relevant period.
     */
    totalFeesPaid?: string;
};


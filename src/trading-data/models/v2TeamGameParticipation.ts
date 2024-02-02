/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2IndividualGameEntity } from './v2IndividualGameEntity';

/**
 * Breakdown of a team's participation in a game.
 */
export type v2TeamGameParticipation = {
    membersParticipating?: Array<v2IndividualGameEntity>;
    teamId?: string;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2IndividualGameEntities } from './v2IndividualGameEntities';
import type { v2TeamGameEntities } from './v2TeamGameEntities';

/**
 * Data relating to a game.
 */
export type v2Game = {
    /**
     * Epoch at which the last game metrics were captured.
     */
    epoch?: string;
    id?: string;
    individual?: v2IndividualGameEntities;
    /**
     * The number of participants in the game.
     */
    participants?: string;
    /**
     * ID of the asset rewarded for involvement in the game.
     */
    rewardAssetId?: string;
    team?: v2TeamGameEntities;
};

